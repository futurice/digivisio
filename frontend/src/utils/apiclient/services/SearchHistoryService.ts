/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchHistoryRowModel } from '../models/SearchHistoryRowModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SearchHistoryService {

    /**
     * Get search history
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