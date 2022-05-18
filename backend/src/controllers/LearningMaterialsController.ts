import axios from "axios";
import { Controller, Get, Path, Route, } from "tsoa";
import { LearningMaterialModel } from "../externalModels/LearningMaterialModel";

@Route("materials")
export class LearningMaterialsController extends Controller {
    @Get("{materialId}")
    public async getLearningMaterialMetadata(@Path() materialId: string): Promise<LearningMaterialModel> {
        // todo refactor and add DI
        const aoeApiBaseUrl = process.env.AOE_API_BASEURL

        if (!aoeApiBaseUrl) {
            throw new Error('Add AOE_API_BASEURL to env')
        }

        const url = `${aoeApiBaseUrl}/metadata/${materialId}`

        const response = await axios.get(url)
        return response.data
    }
}
