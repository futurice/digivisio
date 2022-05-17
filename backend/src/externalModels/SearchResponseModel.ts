export type DisplayName = {
    fi: string;
    sv: string;
    en: string;
}

export type Material = {
    id: string;
    language: string;
    link: string;
    priority: number;
    filepath?: any;
    originalfilename?: any;
    filesize?: any;
    mimetype?: any;
    format?: any;
    filekey?: any;
    filebucket?: any;
    publishedat: Date;
    pdfkey?: any;
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

export type EducationalUs = {
    id: string;
    value: string;
    educationalmaterialid: string;
    educationalusekey: string;
}

export type License = {
    value: string;
    key: string;
}

export type Author2 = {
    id: string;
    authorname: string;
    isbasedonid: string;
}

export type IsBasedOn = {
    id: string;
    author: Author2[];
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

export type Version = {
    publishedat: Date;
}

export type SearchResponseModel = {
    id: string;
    materials: Material[];
    owner: boolean;
    name: Name[];
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    archivedAt?: any;
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
    publisher: any[];
    description: Description[];
    keywords: Keyword[];
    learningResourceTypes: LearningResourceType[];
    timeRequired: string;
    expires?: any;
    typicalAgeRange: TypicalAgeRange;
    educationalAlignment: EducationalAlignment[];
    educationalLevels: EducationalLevel[];
    educationalUses: EducationalUs[];
    accessibilityFeatures: any[];
    accessibilityHazards: any[];
    license: License;
    isBasedOn: IsBasedOn[];
    educationalRoles: EducationalRole[];
    thumbnail: Thumbnail;
    attachments: any[];
    versions: Version[];
    hasDownloadableFiles: boolean;
    urn?: any;
}
