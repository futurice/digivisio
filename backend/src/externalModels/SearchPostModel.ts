// todo figure out if we can auto generate these from some openapi definition or similar
export type Filters = {
    educationalLevels: string[];
    learningResourceTypes: string[];
}

export type SearchPostModel = {
    filters: Filters;
    from: number;
    keywords: string;
    size: number;
    sort: string;
}