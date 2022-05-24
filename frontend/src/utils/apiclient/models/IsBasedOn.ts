/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IsBasedOnAuthor } from './IsBasedOnAuthor';

export type IsBasedOn = {
    educationalmaterialid: string;
    materialname: string;
    url: string;
    author: Array<IsBasedOnAuthor>;
    id: string;
};
