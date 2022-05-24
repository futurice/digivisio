/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessibilityFeature } from './AccessibilityFeature';
import type { AccessibilityHazard } from './AccessibilityHazard';
import type { Author } from './Author';
import type { Description } from './Description';
import type { EducationalLevel } from './EducationalLevel';
import type { EducationalRole } from './EducationalRole';
import type { EducationalSubject } from './EducationalSubject';
import type { EducationalUse } from './EducationalUse';
import type { Keyword } from './Keyword';
import type { LearningResourceType } from './LearningResourceType';
import type { License } from './License';
import type { MaterialName } from './MaterialName';
import type { TeachingObjective } from './TeachingObjective';
import type { Thumbnail } from './Thumbnail';

export type SearchResult = {
  accessibilityHazards: Array<AccessibilityHazard>;
  accessibilityFeatures: Array<AccessibilityFeature>;
  educationalUses: Array<EducationalUse>;
  popularity: number;
  thumbnail: Thumbnail;
  hasDownloadableFiles: boolean;
  teaches: Array<TeachingObjective>;
  educationalSubjects: Array<EducationalSubject>;
  languages: Array<string>;
  keywords: Array<Keyword>;
  educationalRoles: Array<EducationalRole>;
  educationalLevels: Array<EducationalLevel>;
  license: License;
  learningResourceTypes: Array<LearningResourceType>;
  authors: Array<Author>;
  description: Array<Description>;
  materialName: Array<MaterialName>;
  updatedAt: string;
  publishedAt: string;
  createdAt: string;
  id: string;
};
