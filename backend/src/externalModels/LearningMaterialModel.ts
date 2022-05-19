export type DisplayName = {
    fi: string;
    sv: string;
    en: string;
}

export type LearningMaterialFile = {
    id: string;
    language: string;
    link: string;
    priority: number;
    filepath: string;
    originalfilename: string;
    filesize: number;
    mimetype: string;
    format: string;
    filekey: string;
    filebucket: string;
    publishedat: Date;
    pdfkey: string;
    displayName: DisplayName;
}

export type Name = {
    id: string;
    materialname: string;
    language: string;
    slug: string;
    educationalmaterialid: string;
}

export type Author = {
    id: string;
    authorname: string;
    organization: string;
    educationalmaterialid: string;
    organizationkey: string;
}

export type Publisher = {
    id: string;
    name: string;
    educationalmaterialid: string;
    publisherkey: string;
}

export type Description = {
    id: string;
    description: string;
    language: string;
    educationalmaterialid: string;
}

export type Keyword = {
    id: string;
    value: string;
    educationalmaterialid: string;
    keywordkey: string;
}

export type LearningResourceType = {
    id: string;
    value: string;
    educationalmaterialid: string;
    learningresourcetypekey: string;
}

export type TypicalAgeRange = {
    typicalAgeRangeMin: number;
    typicalAgeRangeMax: number;
}

export type EducationalAlignment = {
    id: string;
    educationalmaterialid: string;
    alignmenttype: string;
    targetname: string;
    source: string;
    educationalframework: string;
    objectkey: string;
    targeturl: string;
}

export type EducationalLevel = {
    id: string;
    value: string;
    educationalmaterialid: string;
    educationallevelkey: string;
}

export type EducationalUse = {
    id: string;
    value: string;
    educationalmaterialid: string;
    educationalusekey: string;
}

export type AccessibilityFeature = {
    id: string;
    value: string;
    educationalmaterialid: string;
    accessibilityfeaturekey: string;
}

export type AccessibilityHazard = {
    id: string;
    value: string;
    educationalmaterialid: string;
    accessibilityhazardkey: string;
}

export type License = {
    value: string;
    key: string;
}

export type IsBasedOnAuthor = {
    id: string;
    authorname: string;
    isbasedonid: string;
}

export type IsBasedOn = {
    id: string;
    author: IsBasedOnAuthor[];
    url: string;
    materialname: string;
    educationalmaterialid: string;
}

export type EducationalRole = {
    id: string;
    educationalrole: string;
    educationalmaterialid: string;
    educationalrolekey: string;
}

export type Thumbnail = {
    id: string;
    filepath: string;
    mimetype: string;
    educationalmaterialid: string;
    filename: string;
    obsoleted: number;
    filekey: string;
    filebucket: string;
}

export type Attachment = {
    id: string;
    filepath: string;
    originalfilename: string;
    filesize: number;
    mimetype: string;
    format: string;
    filekey: string;
    filebucket: string;
    defaultfile: boolean;
    kind: string;
    label: string;
    srclang: string;
    materialid: string;
}

export type Version = {
    publishedat: Date;
}

export type LearningMaterialModel = {
    id: string;
    materials: LearningMaterialFile[];
    owner: boolean;
    name: Name[];
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    archivedAt: Date;
    suitsAllEarlyChildhoodSubjects: boolean;
    suitsAllPrePrimarySubjects: boolean;
    suitsAllBasicStudySubjects: boolean;
    suitsAllUpperSecondarySubjects: boolean;
    suitsAllVocationalDegrees: boolean;
    suitsAllSelfMotivatedSubjects: boolean;
    suitsAllBranches: boolean;
    suitsAllUpperSecondarySubjectsNew: boolean;
    ratingContentAverage?: any;
    ratingVisualAverage?: any;
    viewCounter: string;
    downloadCounter: string;
    author: Author[];
    publisher: Publisher[];
    description: Description[];
    keywords: Keyword[];
    learningResourceTypes: LearningResourceType[];
    timeRequired: string;
    expires: Date;
    typicalAgeRange: TypicalAgeRange;
    educationalAlignment: EducationalAlignment[];
    educationalLevels: EducationalLevel[];
    educationalUses: EducationalUse[];
    accessibilityFeatures: AccessibilityFeature[];
    accessibilityHazards: AccessibilityHazard[];
    license: License;
    isBasedOn: IsBasedOn[];
    educationalRoles: EducationalRole[];
    thumbnail: Thumbnail;
    attachments: Attachment[];
    versions: Version[];
    hasDownloadableFiles: boolean;
    urn?: any;
}
