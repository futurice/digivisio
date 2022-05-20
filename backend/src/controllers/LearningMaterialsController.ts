import { Controller, Get, Path, Route, Security } from "tsoa";
import { LearningMaterialModel } from "../models/OpenUniversityCourseModel"
import { LearningMaterialsService } from "../services/learningMaterialService";

@Route("api/materials")
@Security("fake_user_id")
export class LearningMaterialsController extends Controller {
    @Get("{materialId}")
    public async getLearningMaterialMetadata(@Path() materialId: string): Promise<LearningMaterialModel> {
        const service = new LearningMaterialsService()
        return service.getEnrichedLearningMaterial(materialId)
    }
}
