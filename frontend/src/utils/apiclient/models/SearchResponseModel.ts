/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SearchResult } from './SearchResult';

export type SearchResponseModel = {
    results: Array<SearchResult>;
    hits: number;
};
