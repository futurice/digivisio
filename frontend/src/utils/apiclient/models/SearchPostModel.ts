/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Filters } from './Filters';

export type SearchPostModel = {
    sort?: string;
    size?: number;
    keywords?: string;
    from?: number;
    filters?: Filters;
};