/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorWithRoles } from './AuthorWithRoles';

export type Authors = {
    /**
     * Main authors
     */
    main?: Array<AuthorWithRoles>;
    /**
     * Secondary authors
     */
    secondary?: Array<AuthorWithRoles>;
    /**
     * Corporate authors
     */
    corporate?: Array<AuthorWithRoles>;
};