import { SearchController } from "./searchController";
import axios, { AxiosResponse } from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('searchController', () => {
    describe('getRandom', () => {
        it('should return number', async () => {
            const controller = new SearchController();
            const response = await controller.getRandom()
            expect(response.randomNumber).toBe(9)
        })
    })

    describe('postSearch', () => {
        const searchResponse: AxiosResponse = {
            data: {
                someproperty: 'somevalue'
            },
            status: 200,
            statusText: "ok",
            headers: {},
            config: {}
        }


        it('should return ok', async () => {
            mockedAxios.post.mockResolvedValue(searchResponse)

            const controller = new SearchController()
            const response = await controller.search({})


            expect(response).toBeDefined()
        })
    })
})