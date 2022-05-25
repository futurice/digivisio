/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ComponentPart = {
    /**
     * Order number in the host record
     */
    number?: string;
    /**
     * Record id
     */
    id?: string;
    /**
     * Title
     */
    title?: string;
    /**
     * Uniform title
     */
    uniformTitle?: string;
    /**
     * Main authors
     */
    authors?: Array<string>;
    /**
     * Presenters
     */
    presenters?: Array<string>;
    /**
     * Arrangers
     */
    arrangers?: Array<string>;
    /**
     * Other authors
     */
    otherAuthors?: Array<string>;
};