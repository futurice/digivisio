export type Result = {
    id: string;
    name: string;
    lopIds: string[];
    lopNames: string[];
    prerequisite?: any;
    prerequisiteCode?: any;
    parentId?: any;
    losId: string;
    asOngoing: boolean;
    nextApplicationPeriodStarts: number[];
    type: string;
    credits: string;
    educationType?: any;
    educationDegree?: any;
    educationDegreeCode?: any;
    homeplace: string;
    childName?: any;
    subjects: string[];
    responsibleProvider: string;
}

export type FacetValue = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues?: any;
    parentId?: any;
}

export type TeachingLangFacet = {
    facetValues: FacetValue[];
}

export type FacetValue2 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues?: any;
    parentId?: any;
}

export type FilterFacet = {
    facetValues: FacetValue2[];
}

export type FacetValue3 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues?: any;
    parentId?: any;
}

export type AppStatusFacet = {
    facetValues: FacetValue3[];
}

export type ChildValue2 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues?: any;
    parentId: string;
}

export type ChildValue = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues: ChildValue2[];
    parentId: string;
}

export type FacetValue4 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues: ChildValue[];
    parentId?: any;
}

export type EdTypeFacet = {
    facetValues: FacetValue4[];
}

export type FacetValue5 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues?: any;
    parentId?: any;
}

export type PrerequisiteFacet = {
    facetValues: FacetValue5[];
}

export type ChildValue3 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues?: any;
    parentId: string;
}

export type FacetValue6 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues: ChildValue3[];
    parentId?: any;
}

export type TopicFacet = {
    facetValues: FacetValue6[];
}

export type FacetValue7 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues?: any;
    parentId?: any;
}

export type FotFacet = {
    facetValues: FacetValue7[];
}

export type FacetValue8 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues?: any;
    parentId?: any;
}

export type TimeOfTeachingFacet = {
    facetValues: FacetValue8[];
}

export type FacetValue9 = {
    facetField: string;
    valueId: string;
    valueName: string;
    count: number;
    childValues?: any;
    parentId?: any;
}

export type FormOfStudyFacet = {
    facetValues: FacetValue9[];
}

export type ApplicationSystemFacet = {
    facetValues: any[];
}

export type SiirtohakuFacet = {
    facetValues: any[];
}

export type OpintopolkuSearchResultModel = {
    results: Result[];
    articleresults: any[];
    providerResults: any[];
    totalCount: number;
    teachingLangFacet: TeachingLangFacet;
    filterFacet: FilterFacet;
    appStatusFacet: AppStatusFacet;
    edTypeFacet: EdTypeFacet;
    prerequisiteFacet: PrerequisiteFacet;
    topicFacet: TopicFacet;
    articleContentTypeFacet?: any;
    providerTypeFacet?: any;
    fotFacet: FotFacet;
    timeOfTeachingFacet: TimeOfTeachingFacet;
    formOfStudyFacet: FormOfStudyFacet;
    applicationSystemFacet: ApplicationSystemFacet;
    siirtohakuFacet: SiirtohakuFacet;
    lopRecommendationFilter?: any;
    loCount: number;
    articleCount: number;
    orgCount: number;
    educationCodeRecommendationFilter?: any;
}
