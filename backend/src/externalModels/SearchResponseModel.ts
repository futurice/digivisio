export type MaterialName = {
    materialname: string;
    language: string;
}

export type Description = {
    description: string;
    language: string;
}

export type Author = {
    authorname: string;
    organization: string;
    organizationkey: string;
}

export type LearningResourceType = {
    value: string;
    learningresourcetypekey: string;
}

export type License = {
    key: string;
    value: string;
}

export type EducationalLevel = {
    value: string;
    educationallevelkey: string;
}

export type EducationalRole = {
    value: string;
    educationalrolekey: string;
}

export type Keyword = {
    value: string;
    keywordkey: string;
}

export type EducationalSubject = {
    key: string;
    source: string;
    value: string;
}

export interface TeachingObjective {
    key: string;
    value: string;
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

export type EducationalUse = {
    value: string;
    educationalusekey: string;
}

export type AccessibilityFeature = {
    value: string;
    accessibilityfeaturekey: string;
}

export type AccessibilityHazard = {
    value: string;
    accessibilityhazardkey: string;
}

export type SearchResult = {
    id: string;
    createdAt: Date;
    publishedAt: Date;
    updatedAt: Date;
    materialName: MaterialName[];
    description: Description[];
    authors: Author[];
    learningResourceTypes: LearningResourceType[];
    license: License;
    educationalLevels: EducationalLevel[];
    educationalRoles: EducationalRole[];
    keywords: Keyword[];
    languages: string[];
    educationalSubjects: EducationalSubject[];
    teaches: TeachingObjective[];
    hasDownloadableFiles: boolean;
    thumbnail: Thumbnail;
    popularity: number;
    educationalUses: EducationalUse[];
    accessibilityFeatures: AccessibilityFeature[];
    accessibilityHazards: AccessibilityHazard[];
}

export type SearchResponseModel = {
    hits: number;
    results: SearchResult[];
}
