/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { SearchResponse } from '../models/SearchResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SearchService {

    /**
     * Search primary index
     * Search the index with given terms and filters. POST method may also be used if sending a long request.
 *
 * The URL syntax here is the same as the one used in Finna user interface. It is possible to make a search in Finna and copy the query parameters here to make the same search via the API.
 *
 * See https://www.kiwi.fi/display/Finna/Finna+API+Terms+of+Use for Finna API Terms of Use.
 *
 * Note: The CC0 metadata licence does not pertain to the resources linked to the metadata, such as images relating to the entries.
 *
 * See https://www.kiwi.fi/pages/viewpage.action?pageId=53839221 for more information and examples.
 * 
     * @param lookfor Search terms. May be a single term, multiple words or a complex query containing boolean operators (AND, OR, NOT), quotes etc. Terms may also be prefixed with a field name (e.g. author:smith) to target only that field (see also type parameter).
     * @param type Search type. The following search types are available:
 * - AllFields
 * - Title
 * - Author
 * - Subject
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
     * @param filter Filter queries. Repeat for every filter.
 * The format for a filter is field:value.
 *
 * 'AND' filtering is used by default. 'OR' or 'NOT' filtering can be used by prepending the field with '~' (OR) or '-' (NOT).
     * @param facet 
     * @param facetFilter Faceting result filters. Contains regular expressions that the facet must match for it to be returned. The result will include the matched facet items and for hierarchical facets any ancestor values.
 * Format for a facet filter is field:regexp, e.g. `author_facet:Sm.*th`.
 *
 * **N.B.**The filtered facet needs to be present in the list of returned facets (facet[] parameter).
     * @param sort Sort method.
     * @param page Record page (first page is 1).
     * @param limit Records to return per page. Set to 0 to return no records.
     * @param prettyPrint Whether to pretty-print the response. Useful for observing the results in a browser.
     * @param lng Language for returned translated strings.
     * @param callback A callback that can be used for JSONP.
     * @returns SearchResponse Response containing result count, records and/or facets.
     * @returns Error Error
     * @throws ApiError
     */
    public static getSearch(
lookfor?: string,
type: string = 'AllFields',
field?: Array<string>,
filter?: Array<string>,
facet?: Array<string>,
facetFilter?: Array<string>,
sort: 'relevance,id asc' | 'main_date_str desc,id asc' | 'main_date_str asc,id asc' | 'callnumber,id asc' | 'author,id asc' | 'title,id asc' | 'last_indexed desc,id asc' | 'first_indexed desc,id asc' = 'relevance,id asc',
page: number = 1,
limit: number = 20,
prettyPrint: boolean = false,
lng: 'fi' | 'sv' | 'en-gb' = 'fi',
callback?: string,
): CancelablePromise<SearchResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/search',
            query: {
                'lookfor': lookfor,
                'type': type,
                'field[]': field,
                'filter[]': filter,
                'facet[]': facet,
                'facetFilter[]': facetFilter,
                'sort': sort,
                'page': page,
                'limit': limit,
                'prettyPrint': prettyPrint,
                'lng': lng,
                'callback': callback,
            },
        });
    }

}