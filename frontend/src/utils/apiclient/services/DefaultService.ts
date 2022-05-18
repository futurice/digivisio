/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SearchPostModel } from '../models/SearchPostModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public static getRandom(): CancelablePromise<{
    randomNumber: number;
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search',
    });
  }

  /**
   * @param requestBody
   * @returns any Ok
   * @throws ApiError
   */
  public static search(requestBody: SearchPostModel): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/search',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
