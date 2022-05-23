
import axios, { AxiosResponse } from 'axios'
import supertest from 'supertest'
import app from './app'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha3NlbGkiLCJuYW1lIjoiQWtzZWxpIiwiaWF0IjoxNjUzMDI4MzA4LCJleHAiOjE4NTMwMzE5MDgsImF1ZCI6ImRpZ2l2aXNpbyIsImlzcyI6ImRpZ2l2aXNpb2FwcCJ9.6TKQnmiIs2JdmZcgW-steaTTmIlh2aPycYGTK1z3pNY'

describe('someintegrationtest', () => {
    describe('postSearch', () => {
        const searchResponseMock: AxiosResponse = {
            data: {
                someproperty: 'somevalue',
            },
            status: 200,
            statusText: 'ok',
            headers: {},
            config: {},
        }

        it('search and save history', async () => {
            mockedAxios.post.mockResolvedValue(searchResponseMock)

            await supertest(app)
                .post('/api/search')
                .set('Authorization', `Bearer ${token}`)
                .expect(200)

            // Assert something about search response...

            const searchHistoryResponse = await supertest(app)
                .get('/api/searchHistory')
                .set('Authorization', `Bearer ${token}`)
                .expect(200)

            expect(searchHistoryResponse.body[0].search_term).toEqual('{}')
        })
    })
})
