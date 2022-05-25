import { SearchController } from './searchController'
import axios, { AxiosResponse } from 'axios'
import { AuthenticatedRequestModel } from '../middlewares/authenticatedRequestModel'
import { successfulResponse } from '../testUtils'
import pool from '../services/dbPoolService'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockRequest = {
    user: { userId: 'someuserid' },
} as AuthenticatedRequestModel

describe('searchController', () => {
    describe('postSearch', () => {
        const searchResponse: AxiosResponse = successfulResponse({
            someproperty: 'somevalue',
        })

        it('should return ok', async () => {
            mockedAxios.post.mockResolvedValue(searchResponse)
            pool.query = jest.fn()

            const controller = new SearchController()
            const response = await controller.search(mockRequest, {})

            expect(response).toBeDefined()
        })
    })
})
