import { AoeLearningMaterialResponseModel } from "../externalModels/AoeLearningMaterialResponseModel";

export type OpenUniversityCourseModel = {
    name: string;
    url: string;
    universityNames: string[];
    subjects: string[];
    credits: string;
}

export type LearningMaterialModel = AoeLearningMaterialResponseModel & { relatedCourses?: OpenUniversityCourseModel[] };
