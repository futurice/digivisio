import { AxiosResponse } from 'axios';

export function successfulResponse(payload: object): AxiosResponse {
    return {
        data: payload,
        status: 200,
        statusText: "ok",
        headers: {},
        config: {}
    }
}
