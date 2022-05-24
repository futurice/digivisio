/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LearningMaterialModel } from '../models/LearningMaterialModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LearningMaterialsService {

    /**
     * Get metadata for a single learning material.
     * @param materialId Learning material ID
     * @returns LearningMaterialModel Ok
     * @throws ApiError
     */
    public static getLearningMaterialMetadata(
        materialId: string,
    ): CancelablePromise<LearningMaterialModel> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/materials/{materialId}',
            path: {
                'materialId': materialId,
            },
        });
    }

}