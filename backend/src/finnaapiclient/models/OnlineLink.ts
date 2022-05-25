/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TranslatedField } from './TranslatedField';

export type OnlineLink = {
    /**
     * Link URL
     */
    url?: string;
    /**
     * Link text
     */
    text?: string;
    /**
     * Link source (data source)
     */
    source?: Array<TranslatedField>;
};