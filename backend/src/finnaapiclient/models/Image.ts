/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Image = {
    /**
     * Image URLs (different sizes are subject to availability)
     */
    urls?: {
/**
 * Small image
 */
small?: Array<string>;
/**
 * Medium image
 */
medium?: Array<string>;
/**
 * Large image
 */
large?: Array<string>;
};
    /**
     * Image description
     */
    description?: string;
    /**
     * Image access and usage rights
     */
    rights?: {
/**
 * License
 */
copyright?: string;
/**
 * Human-readable description
 */
description?: Array<string>;
/**
 * Link to copyright information
 */
link?: string;
};
};