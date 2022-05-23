import { Controller, Get, Path, Route, Security, Tags } from 'tsoa'
import type { LearningMaterialModel } from '../models/OpenUniversityCourseModel'
import { LearningMaterialsService } from '../services/learningMaterialService'

@Route('api/materials')
@Security('fake_user_id')
@Tags('LearningMaterials')
export class LearningMaterialsController extends Controller {
    /**
     * Get metadata for a single learning material.
     *
     * @param materialId Learning material ID
     * @returns
     */
    @Get('{materialId}')
    public async getLearningMaterialMetadata(@Path() materialId: string): Promise<LearningMaterialModel> {
        return LearningMaterialsService.getEnrichedLearningMaterial(materialId)
    }
}
