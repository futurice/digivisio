/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DisplayName } from './DisplayName';

export type LearningMaterialFile = {
    displayName: DisplayName;
    pdfkey: string;
    publishedat: string;
    filebucket: string;
    filekey: string;
    format: string;
    mimetype: string;
    filesize: number;
    originalfilename: string;
    filepath: string;
    priority: number;
    link: string;
    language: string;
    id: string;
};