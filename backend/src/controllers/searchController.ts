import axios from "axios";
import { Body, Controller, Get, Post, Route, Request, Security, Tags } from "tsoa";
import { SearchPostModel } from "../externalModels/SearchPostModel";
import { SearchResponseModel } from "../externalModels/SearchResponseModel";
import { AuthenticatedRequestModel } from "../middlewares/authenticatedRequestModel";
import { getRequiredEnvVariable } from "../utils";
import { SearchHistoryService } from "../services/loggingService";

@Route("api/search")
@Security("fake_user_id")
@Tags('Search')
export class SearchController extends Controller {
    /**
     * Get random. This is here for testing
     * @param request 
     * @returns 
     */
    @Get()
    public async getRandom(@Request() request: AuthenticatedRequestModel): Promise<({ randomNumber: number, userId: string | undefined })> {
        return {
            randomNumber: 9,
            userId: request.user?.userId
        }
    }

    /**
     * Search eoa database with filters
     * @param request 
     * @param searchData 
     * @returns 
     */
    @Post()
    public async search(@Request() request: AuthenticatedRequestModel, @Body() searchData: SearchPostModel): Promise<SearchResponseModel> {
        const aoeApiBaseUrl = getRequiredEnvVariable('AOE_API_BASEURL');

        const aoeApiSearchUrl = `${aoeApiBaseUrl}/search`

        const response = await axios.post(aoeApiSearchUrl, searchData)

        try {
            // todo do we have some sensible way of figuring out if searchdata is "empty"?
            // todo figure out what we need to save here, also, consider using jsonb as column type

            // todo.. no seriously, this needs DI
            await new SearchHistoryService().write(request.user.userId, searchData);
        }
        catch (error: unknown) {
            console.error('uh oh...');
            throw error;
        }

        return response.data
    }
}
