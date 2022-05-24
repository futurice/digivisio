/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessibilityFeature } from './AccessibilityFeature';
import type { AccessibilityHazard } from './AccessibilityHazard';
import type { Attachment } from './Attachment';
import type { Author } from './Author';
import type { Description } from './Description';
import type { EducationalAlignment } from './EducationalAlignment';
import type { EducationalLevel } from './EducationalLevel';
import type { EducationalRole } from './EducationalRole';
import type { EducationalUse } from './EducationalUse';
import type { IsBasedOn } from './IsBasedOn';
import type { Keyword } from './Keyword';
import type { LearningMaterialFile } from './LearningMaterialFile';
import type { LearningResourceType } from './LearningResourceType';
import type { License } from './License';
import type { Name } from './Name';
import type { Publisher } from './Publisher';
import type { Thumbnail } from './Thumbnail';
import type { TypicalAgeRange } from './TypicalAgeRange';
import type { Version } from './Version';

export type AoeLearningMaterialResponseModel = {
  urn?: any;
  hasDownloadableFiles: boolean;
  versions: Array<Version>;
  attachments: Array<Attachment>;
  thumbnail: Thumbnail;
  educationalRoles: Array<EducationalRole>;
  isBasedOn: Array<IsBasedOn>;
  license: License;
  accessibilityHazards: Array<AccessibilityHazard>;
  accessibilityFeatures: Array<AccessibilityFeature>;
  educationalUses: Array<EducationalUse>;
  educationalLevels: Array<EducationalLevel>;
  educationalAlignment: Array<EducationalAlignment>;
  typicalAgeRange: TypicalAgeRange;
  expires: string;
  timeRequired: string;
  learningResourceTypes: Array<LearningResourceType>;
  keywords: Array<Keyword>;
  description: Array<Description>;
  publisher: Array<Publisher>;
  author: Array<Author>;
  downloadCounter: string;
  viewCounter: string;
  ratingVisualAverage?: any;
  ratingContentAverage?: any;
  suitsAllUpperSecondarySubjectsNew: boolean;
  suitsAllBranches: boolean;
  suitsAllSelfMotivatedSubjects: boolean;
  suitsAllVocationalDegrees: boolean;
  suitsAllUpperSecondarySubjects: boolean;
  suitsAllBasicStudySubjects: boolean;
  suitsAllPrePrimarySubjects: boolean;
  suitsAllEarlyChildhoodSubjects: boolean;
  archivedAt: string;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  name: Array<Name>;
  owner: boolean;
  materials: Array<LearningMaterialFile>;
  id: string;
};
