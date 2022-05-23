
import axios, { AxiosResponse } from 'axios'
import supertest from 'supertest'
import app from './app'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('someintegrationtest', () => {
    describe('postSearch', () => {
        const searchResponse: AxiosResponse = {
            data: {
                someproperty: 'somevalue',
            },
            status: 200,
            statusText: 'ok',
            headers: {},
            config: {},
        }

        it('search and save history', async () => {
            mockedAxios.post.mockResolvedValue(searchResponse)

            await supertest(app).post('/api/search')
                .expect(200)
                .then((_response) => {
                    // check response?
                })

            // todo check db contains history
        })
    })
})
