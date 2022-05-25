/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchPostModel } from '../models/SearchPostModel';
import type { SearchResponseModel } from '../models/SearchResponseModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SearchService {

    /**
     * Get random. This is here for testing
     * @returns any Ok
     * @throws ApiError
     */
    public static getRandom(): CancelablePromise<{
userId?: string;
randomNumber: number;
}> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/search',
        });
    }

    /**
     * Search eoa database with filters
     * @param requestBody 
     * @returns SearchResponseModel Ok
     * @throws ApiError
     */
    public static search(
requestBody: SearchPostModel,
): CancelablePromise<SearchResponseModel> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/search',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}