import { LearningMaterialsController } from "./LearningMaterialsController";
import axios, { AxiosResponse } from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('learningMaterialsController', () => {
    describe('get', () => {
        const searchResponse: AxiosResponse = {
            data: {
                someproperty: 'somevalue',
                keywords: [],
            },
            status: 200,
            statusText: "ok",
            headers: {},
            config: {}
        }


        it('should return ok', async () => {
            mockedAxios.get.mockResolvedValue(searchResponse)

            const controller = new LearningMaterialsController()
            const response = await controller.getLearningMaterialMetadata("10")

            expect(response).toBeDefined()
        })
    })
})
