/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AoeLearningMaterialResponseModel } from './AoeLearningMaterialResponseModel';
import type { OpenUniversityCourseModel } from './OpenUniversityCourseModel';
import type { RelatedPublicationsModel } from './RelatedPublicationsModel';

export type LearningMaterialModel = (AoeLearningMaterialResponseModel & {
relatedPublications?: Array<RelatedPublicationsModel>;
relatedCourses?: Array<OpenUniversityCourseModel>;
});