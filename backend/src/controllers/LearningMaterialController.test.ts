import { LearningMaterialsController } from './LearningMaterialsController'
import axios, { AxiosResponse } from 'axios'
import { successfulResponse } from '../testUtils'
import { SearchHistoryService } from '../services/loggingService'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('../services/loggingService')
const searchHistoryServiceMock = SearchHistoryService as jest.Mocked<typeof SearchHistoryService>

describe('learningMaterialsController', () => {
    describe('get', () => {
        const searchResponse: AxiosResponse = successfulResponse({
            someproperty: 'somevalue',
            keywords: [],
        })
        const searchResponseWithKeywords = successfulResponse({
            keywords: [
                { value: 'keyword1' },
                { value: 'keyword2' },
                { value: 'keyword3' },
                { value: 'keyword4' },
            ],
        })
        const courseResponse = successfulResponse({
            results: [
                {
                    id: '1',
                    name: 'Avoin yliopisto',
                    lopNames: [],
                    subjects: [],
                    credits: '',
                },
            ],
        })

        it('should return ok', async () => {
            mockedAxios.get.mockResolvedValue(searchResponse)
            searchHistoryServiceMock.writeApiRequest.mockResolvedValue()

            const controller = new LearningMaterialsController()
            const response = await controller.getLearningMaterialMetadata('10')

            expect(response).toBeDefined()
        })

        it('should include related course data', async () => {
            mockedAxios.get.mockImplementation((url) => {
                if (url.startsWith('opintopolku')) {
                    return Promise.resolve(courseResponse)
                } else {
                    return Promise.resolve(searchResponseWithKeywords)
                }
            })
            searchHistoryServiceMock.writeApiRequest.mockResolvedValue()

            const controller = new LearningMaterialsController()
            const response = await controller.getLearningMaterialMetadata('10')

            expect(response.relatedCourses?.length).toBeGreaterThan(0)
        })
    })
})
