/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Facet = {
    /**
     * Facet value
     */
    value?: string;
    /**
     * Translated facet value
     */
    translated?: string;
    /**
     * Count of records that can be found if the facet is added to the search as a filter
     */
    count?: number;
    /**
     * The current search with the facet added as a filter
     */
    href?: string;
    /**
     * True if if the facet is in use in the filter parameter of the query
     */
    isApplied?: boolean;
    /**
     * For hierarchical facets, any child facets
     */
    children?: Array<Facet>;
};