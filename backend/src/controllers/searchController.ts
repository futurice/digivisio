import axios from "axios";
import { Body, Controller, Get, Post, Route, Request, Security, Tags } from "tsoa";
import pool from "../dbPoolService";
import { SearchPostModel } from "../externalModels/SearchPostModel";
import { SearchResponseModel } from "../externalModels/SearchResponseModel";
import { AuthenticatedRequestModel } from "../middlewares/authenticatedRequestModel";
import { getRequiredEnvVariable } from "../utils";

@Route("api/search")
@Security("fake_user_id")
@Tags('Search')
export class SearchController extends Controller {
    @Get()
    public async getRandom(@Request() request: AuthenticatedRequestModel): Promise<({ randomNumber: number, userId: string | undefined })> {
        return {
            randomNumber: 9,
            userId: request.user?.userId
        }
    }

    @Post()
    public async search(@Request() request: AuthenticatedRequestModel, @Body() searchData: SearchPostModel): Promise<SearchResponseModel> {
        const aoeApiBaseUrl = getRequiredEnvVariable('AOE_API_BASEURL');

        const aoeApiSearchUrl = `${aoeApiBaseUrl}/search`

        const response = await axios.post(aoeApiSearchUrl, searchData)

        try {
            // todo do we have some sensible way of figuring out if searchdata is "empty"?
            // todo figure out what we need to save here, also, consider using jsonb as column type
            await pool.query('INSERT INTO search_history (user_id, search_term) VALUES ($1, $2)', [request.user?.userId, JSON.stringify(searchData)]);
        }
        catch (error: unknown) {
            console.error('uh oh...');
            throw error;
        }

        return response.data
    }
}
