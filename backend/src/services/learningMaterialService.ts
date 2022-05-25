import axios, { AxiosResponse } from 'axios'
import { AoeLearningMaterialResponseModel } from '../externalModels/AoeLearningMaterialResponseModel'
import { OpintopolkuSearchResultModel } from '../externalModels/OpintopolkuSearchResponseModel'
import { OpintopolkuCourseMetadata } from '../externalModels/OpintopolkuCourseMetadata'
import { LearningMaterialModel, OpenUniversityCourseModel, RelatedPublicationsModel as RelatedPublicationModel } from '../models/OpenUniversityCourseModel'
import { getRequiredEnvVariable } from '../utils'
import * as qs from 'qs'
import { SearchHistoryService } from './loggingService'
import striptags from 'striptags'
import { SearchResponse } from '../finnaapiclient'

export const LearningMaterialsService = {
    /**
     * Get enriched learning material metadata.
     *
     * Gets material metadata from aoe.fi and combines it with related open
     * university courses from opintopolku.fi.
     */
    getEnrichedLearningMaterial: async (materialId: string): Promise<LearningMaterialModel> => {
        const maxCourses = 2 // Maximum number of related courses to include in the response
        const maxPublications = 4 // Maximum number of related publications

        const learningMaterial: LearningMaterialModel = await LearningMaterialsService.getLearningMaterialMetadata(materialId)
        const keywords = learningMaterial.keywords.map(k => k.value)

        // Fetch related courses and publications for the first few keywords only.
        // Usually we get enough hits for the first few keywords, so it's not
        // necessary do expensive requests on all of them.
        const mainKeywords = keywords.slice(0, 3)

        let coursesByKeywords: OpenUniversityCourseModel[][] = []
        try {
            coursesByKeywords = await Promise.all(
                mainKeywords.map(k => LearningMaterialsService.getOpenUniversityCourses(k, maxCourses)))
        } catch (e) {
            // Leave the courses undefined if the API call fails
            console.warn(e)
        }
        // Remove duplicates and take only the first maxCourses courses
        const uniqueCourses = [...new Set([...coursesByKeywords.flat()])]
        learningMaterial.relatedCourses = uniqueCourses.slice(0, maxCourses)

        // Append description field to relatedCourses. Do this after selecting
        // the courses, because getCourseDescription is relatively expensive
        // (it does an API request).
        learningMaterial.relatedCourses = await Promise.all(
            learningMaterial.relatedCourses.map(async (c: OpenUniversityCourseModel) => {
                c.description = await LearningMaterialsService.getCourseDescription(c.courseId)
                return c
            }),
        )

        // Append related publications from Finna
        try {
            const publicationsByKeywords = await Promise.all(
                mainKeywords.map(k => LearningMaterialsService.getFinnaPublications(k, maxPublications)))
            learningMaterial.relatedPublications = publicationsByKeywords.flat().slice(0, maxPublications)
        } catch (e: any) {
            // Leave the publications undefined if the API call fails
            console.warn(e)
        }

        return learningMaterial
    },

    /**
     * Fetch learning material metadata from the aoe.fi API
     */
    getLearningMaterialMetadata: async (materialId: string): Promise<AoeLearningMaterialResponseModel> => {
        const aoeApiBaseUrl = getRequiredEnvVariable('AOE_API_BASEURL')
        const url = `${aoeApiBaseUrl}/metadata/${materialId}`

        const response = await axios.get(url)
        await SearchHistoryService.writeApiRequest('', url, {})
        return response.data
    },

    /**
     * Fetch open university courses from opintopolku.fi.
     *
     * @param searchText Query text, for example field of study. Returns courses related to this query.
     * @param maxResults Maximum number of courses to return (optional)
     */
    getOpenUniversityCourses: async (searchText: string, maxResults: number = 4): Promise<OpenUniversityCourseModel[]> => {
        const opintopolkuBaseUrl = getRequiredEnvVariable('OPINTOPOLKU_API_BASEURL')
        const query = {
            start: 0,
            rows: maxResults,
            lang: 'fi',
            searchType: 'LO', // Koulutus
            text: searchText,
            facetFilters: [
                'educationType_ffm:et01.05.03', // Avoin yliopistokoulutus
                'formOfStudy_ffm:opetusmuotokk_4', // Verkko-opiskelu
            ],
        }

        const searchUrl = `${opintopolkuBaseUrl}/lo/search?${qs.stringify(query)}`
        const response: AxiosResponse<OpintopolkuSearchResultModel> = await axios.get(searchUrl)

        await SearchHistoryService.writeApiRequest('', searchUrl, {})

        const courses: OpenUniversityCourseModel[] = response.data.results.map(r => {
            const courseUrl = `${opintopolkuBaseUrl}/app/#!/koulutus/${r.id}`

            // Remove duplicated from each lopName
            const cleanedLopNames = r.lopNames.map(name => {
                return [...new Set(name.split(', '))].join(', ')
            })

            return {
                courseId: r.id,
                name: r.name,
                url: courseUrl,
                universityNames: cleanedLopNames,
                subjects: r.subjects,
                credits: r.credits,
            }
        })

        return courses
    },

    /**
     * Download a description for a course
     */
    getCourseDescription: async (courseId: string): Promise<string | undefined> => {
        const baseUrl = getRequiredEnvVariable('OPINTOPOLKU_API_BASEURL')
        const query = {
            uiLang: 'fi',
            prerequisite: 'PK',
        }
        const courseDataUrl = `${baseUrl}/lo/koulutus/${courseId}?${qs.stringify(query)}`

        let description
        try {
            await SearchHistoryService.writeApiRequest('', courseDataUrl, {})

            const response = await axios.get(courseDataUrl)
            const courseMetadata: OpintopolkuCourseMetadata = response.data
            description = striptags(courseMetadata.content).trim()
        } catch (e: any) {
            console.warn(e)
        }

        return description
    },

    /**
     * Find publications related to a search term from Finna
     */
    getFinnaPublications: async (searchTerm: string, maxResults: number): Promise<RelatedPublicationModel[]> => {
        const baseUrl = getRequiredEnvVariable('FINNA_API_BASEURL')
        const query = {
            lookfor: searchTerm,
            type: 'AllFields',
            sort: 'relevance,id asc',
            page: 1,
            limit: maxResults,
            prettyPrint: false,
            lng: 'fi',
            filter: [
                'free_online_boolean:"1"', // "Verkossa saatavilla"
                '~format_ext_str_mv:"1/Thesis/MastersPolytechnic/"', // OR "Opinnäyte > Ylempi AMK-opinnäytetyö"
                '~format_ext_str_mv:"1/Thesis/Thesis/"', // OR "Opinnäyte > Väitöskirja"
                '~format_ext_str_mv:"0/OtherText/"', // OR "Teksti, muu"
                '~format_ext_str_mv:"0/Journal/"', // OR "Lehti/Artikkeli"
                '~format_ext_str_mv:"1/Other/Text/"', // OR "Muu/Määrittelemätön > Teksti"
                '~format_ext_str_mv:"0/Book/"', // OR "Kirja"
            ],
            dfApplied: 1,
        }
        const url = `${baseUrl}/search?${qs.stringify(query)}`

        await SearchHistoryService.writeApiRequest('', url, {})

        const response: AxiosResponse<SearchResponse> = await axios.get(url)
        const publications = (response.data.records || []).map(record => {
            let docUrl: string | undefined
            if (record.onlineUrls) {
                docUrl = record.onlineUrls[0]?.url
            }
            if (!docUrl && record.urls) {
                docUrl = record.urls[0]?.url
            }

            let imageUrl: string | undefined
            if (record.images) {
                imageUrl = record.images[0]
                if (imageUrl) {
                    imageUrl = 'https://api.finna.fi' + imageUrl
                }
            }

            const authors = record.nonPresenterAuthors || []
            const authorNames = authors.map(x => x.name).filter(x => x != null).join('; ') || undefined

            return {
                id: record.id,
                title: record.title,
                authors: authorNames,
                url: docUrl,
                image: imageUrl,
            }
        })

        return publications
    },
}

export default LearningMaterialsService
