/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Subject = {
    /**
     * Subject heading parts as an array from the least specific to the most specific
     */
    heading?: Array<string>;
    /**
     * Subject type
     */
    type?: '' | 'personal name' | 'corporate name' | 'meeting name' | 'uniform title' | 'chronological' | 'topic' | 'geographic' | 'genre/form' | 'occupation' | 'keyword';
    /**
     * Subject source/thesaurus (e.g. lcsh, mesh)
     */
    source?: string;
};