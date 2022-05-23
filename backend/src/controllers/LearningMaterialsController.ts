import { Controller, Get, Path, Route, Security } from "tsoa";
import { LearningMaterialModel } from "../models/OpenUniversityCourseModel"
import { LearningMaterialsService } from "../services/learningMaterialService";

@Route("api/materials")
@Security("fake_user_id")
export class LearningMaterialsController extends Controller {
    /**
     * Get metadata for a single learning material.
     *
     * @param materialId Learning material ID
     * @returns 
     */
    @Get("{materialId}")
    public async getLearningMaterialMetadata(@Path() materialId: string): Promise<LearningMaterialModel> {
        return LearningMaterialsService.getEnrichedLearningMaterial(materialId)
    }
}
