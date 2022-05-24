/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { SearchResponse } from '../models/SearchResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RecordService {

    /**
     * Fetch records from primary index
     * Return a single record or multiple records. POST method may also be used if sending a long request.
 *
 * See https://www.kiwi.fi/display/Finna/Finna+API+Terms+of+Use for Finna API Terms of Use.
 *
 * Note: The CC0 metadata licence does not pertain to the resources linked to the metadata, such as images relating to the entries.
 *
 * See https://www.kiwi.fi/pages/viewpage.action?pageId=53839221 for more information and examples.
 * 
     * @param id A single record ID
     * @param id Multiple record IDs
     * @param field Fields to return. If not specified, a set of default fields is returned.
 *
 * The default fields are:
 * - buildings
 * - formats
 * - id
 * - imageRights
 * - images
 * - languages
 * - nonPresenterAuthors
 * - onlineUrls
 * - presenters
 * - rating
 * - series
 * - subjects
 * - title
 * - urls
     * @param prettyPrint Whether to pretty-print the response. Useful for observing the results in a browser.
     * @param lng Language for returned translated strings.
     * @param callback A callback that can be used for JSONP.
     * @returns SearchResponse Response containing result count and records
     * @returns Error Error
     * @throws ApiError
     */
    public static getRecord(
//id?: string,
id?: Array<string> | string,
field?: Array<string>,
prettyPrint: boolean = false,
lng: 'fi' | 'sv' | 'en-gb' = 'fi',
callback?: string,
): CancelablePromise<SearchResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/record',
            query: {
                'id': id,
                'id[]': id,
                'field[]': field,
                'prettyPrint': prettyPrint,
                'lng': lng,
                'callback': callback,
            },
        });
    }

}