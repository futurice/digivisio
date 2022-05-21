import axios, { AxiosResponse } from "axios";
import { AoeLearningMaterialResponseModel } from "../externalModels/AoeLearningMaterialResponseModel";
import { OpintopolkuSearchResultModel } from "../externalModels/OpintopolkuSearchResponseModel";
import { LearningMaterialModel, OpenUniversityCourseModel } from "../models/OpenUniversityCourseModel";
import * as qs from "qs";

export class LearningMaterialsService {
    /**
     * Get enriched learning material metadata.
     * 
     * Gets material metadata from aoe.fi and combines it with related open
     * university courses from opintopolku.fi.
     */
    public async getEnrichedLearningMaterial(materialId: string): Promise<LearningMaterialModel> {
        const maxCourses = 4  // Maximum number of related courses to include in the response

        const learningMaterial: LearningMaterialModel = await this.getLearningMaterialMetadata(materialId)
        const keywords = learningMaterial.keywords.map(k => k.value)

        // Fetch courses for the first few keywords. Usually we get enough
        // courses for the first few keywords, so it's not necessary to fetch
        // courses for all of them.
        const coursesByKeywords = await Promise.all(
            keywords.slice(0, 3).map(k => this.getOpenUniversityCourses(k, maxCourses)))
        // Remove duplicates and take only the first maxCourses courses
        const uniqueCourses = [...new Set([...coursesByKeywords.flat()])]
        learningMaterial.relatedCourses = uniqueCourses.slice(0, maxCourses)

        return learningMaterial
    }

    /**
     * Fetch learning material metadata from the aoe.fi API
     */
    public async getLearningMaterialMetadata(materialId: string): Promise<AoeLearningMaterialResponseModel> {
        // todo refactor and add DI
        const aoeApiBaseUrl = process.env.AOE_API_BASEURL

        if (!aoeApiBaseUrl) {
            throw new Error('Add AOE_API_BASEURL to env')
        }

        const url = `${aoeApiBaseUrl}/metadata/${materialId}`

        const response = await axios.get(url)
        return response.data
    }

    /**
     * Fetch open university courses from opintopolku.fi.
     * 
     * @param searchText Query text, for example field of study. Returns courses related to this query.
     * @param maxResults Maximum number of courses to return (optional)
     */
    public async getOpenUniversityCourses(searchText: string, maxResults: number = 4): Promise<OpenUniversityCourseModel[]> {
        const opintopolkuSearchBaseUrl = process.env.OPINTOPOLKU_API_SEARCH_BASEURL

        if (!opintopolkuSearchBaseUrl) {
            throw new Error('Add OPINTOPOLKU_API_SEARCH_BASEURL to env')
        }

        const query = {
            start: 0,
            rows: maxResults,
            lang: 'fi',
            searchType: 'LO',  // Koulutus
            text: searchText,
            facetFilters: [
                'educationType_ffm:et01.05.03',  // Avoin yliopistokoulutus
                'formOfStudy_ffm:opetusmuotokk_4'  // Verkko-opiskelu
            ],
        }

        const searchUrl = `${opintopolkuSearchBaseUrl}?${qs.stringify(query)}`
        const response: AxiosResponse<OpintopolkuSearchResultModel> = await axios.get(searchUrl)

        const courses: OpenUniversityCourseModel[] = response.data.results.map(r => {
            const courseUrl = `https://opintopolku.fi/app/#!/koulutus/${r.id}`
            
            // Remove duplicated from each lopName
            const cleanedLopNames = r.lopNames.map(name => {
                return [...new Set(name.split(', '))].join(', ')
            })
             
            return {
                name: r.name,
                url: courseUrl,
                universityNames: cleanedLopNames,
                subjects: r.subjects,
                credits: r.credits,
            }
        })

        return courses
    }
}