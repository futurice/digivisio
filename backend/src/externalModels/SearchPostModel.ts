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
    educationalLevels: string[];
    learningResourceTypes: string[];
}

export type SearchPostModel = {
    filters?: Filters;
    from?: number;
    keywords?: string;
    size?: number;
    sort?: string;
}