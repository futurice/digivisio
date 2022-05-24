/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AoeLearningMaterialResponseModel } from './AoeLearningMaterialResponseModel';
import type { OpenUniversityCourseModel } from './OpenUniversityCourseModel';

export type LearningMaterialModel = AoeLearningMaterialResponseModel & {
  relatedCourses?: Array<OpenUniversityCourseModel>;
};
