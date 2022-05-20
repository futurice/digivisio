import axios from "axios";
import { Controller, Get, Path, Route, Security } from "tsoa";
import { LearningMaterialModel } from "../externalModels/LearningMaterialModel";
import { getRequiredEnvVariable } from "../utils";

@Route("api/materials")
@Security("fake_user_id")
export class LearningMaterialsController extends Controller {
    @Get("{materialId}")
    public async getLearningMaterialMetadata(@Path() materialId: string): Promise<LearningMaterialModel> {
        const aoeApiBaseUrl = getRequiredEnvVariable('AOE_API_BASEURL');

        const url = `${aoeApiBaseUrl}/metadata/${materialId}`

        const response = await axios.get(url)
        return response.data
    }
}
