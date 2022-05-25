/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Link = {
    /**
     * Link type (e.g. id, isn or title)
     */
    type?: string;
    /**
     * Link value (e.g. record ID, ISBN or title)
     */
    value?: string;
    /**
     * Record IDs that need to be excluded from the results
     */
    exclude?: Array<string>;
};