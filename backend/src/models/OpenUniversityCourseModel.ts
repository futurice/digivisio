import { AoeLearningMaterialResponseModel } from '../externalModels/AoeLearningMaterialResponseModel'

export type OpenUniversityCourseModel = {
    courseId: string;
    name: string;
    url: string;
    universityNames: string[];
    subjects: string[];
    credits: string;
    description?: string;
}

export type RelatedPublicationsModel = {
    id?: string,
    title?: string;
    authors?: string;
    url?: string;
    imageUrl?: string,
    description?: string;
}

export type LearningMaterialModel = AoeLearningMaterialResponseModel & {
    relatedCourses?: OpenUniversityCourseModel[],
    relatedPublications?: RelatedPublicationsModel[],
};
