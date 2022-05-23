/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LearningMaterialModel } from '../models/LearningMaterialModel';
import type { SearchHistoryRowModel } from '../models/SearchHistoryRowModel';
import type { SearchPostModel } from '../models/SearchPostModel';
import type { SearchResponseModel } from '../models/SearchResponseModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param materialId 
     * @returns LearningMaterialModel Ok
     * @throws ApiError
     */
    public static getLearningMaterialMetadata(
materialId: string,
): CancelablePromise<LearningMaterialModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/materials/{materialId}',
            path: {
                'materialId': materialId,
            },
        });
    }

    /**
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

    /**
     * @returns SearchHistoryRowModel Ok
     * @throws ApiError
     */
    public static getSearchHistory(): CancelablePromise<Array<SearchHistoryRowModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/searchhistory',
        });
    }

}