/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Get a random number
     * @returns any 200 response
     * @throws ApiError
     */
    public static random(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/random',
        });
    }

}