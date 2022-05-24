/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Facet } from './Facet';
import type { Record } from './Record';

export type SearchResponse = {
    /**
     * Number of results
     */
    resultCount: number;
    /**
     * Records
     */
    records?: Array<Record>;
    /**
     * Facets
     */
    facets?: Array<Facet>;
    /**
     * Status code
     */
    status: 'OK';
};