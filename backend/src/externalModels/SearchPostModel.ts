export type Filters = {
    accessibilityFeatures?: string[];
    accessibilityHazards?: string[];
    authors?: string[];
    educationalLevels?: string[];
    educationalRoles?: string[];
    educationalSubjects?: string[];
    educationalUses?: string[];
    keywords?: string[];
    languages?: string[];
    learningResourceTypes?: string[];
    licenses?: string[];
    organizations?: string[];
    teaches?: string[];
}

export type SearchPostModel = {
    filters?: Filters;
    from?: number;
    keywords?: string;
    size?: number;
    sort?: string;
}