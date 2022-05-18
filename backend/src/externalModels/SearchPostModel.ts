/*
curl -XPOST -H "Content-Type: application/json" https://aoe.fi/api/v2/search --data '{
    "filters": {
        "educationalLevels" : [
            "8cb1a02f-54cb-499a-b470-4ee980519707"
        ],
        "learningResourceTypes" : [
            "a31e360b-86ea-4857-bdd7-ac5253e7c1ec"
        ]
    },
    "from": 0,
    "keywords": "luonto",
    "size": 10,
    "sort": "newest"
}
*/


// todo figure out if we can auto generate these from some openapi definition or similar
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