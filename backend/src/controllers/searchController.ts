import axios from "axios";
import { Body, Controller, Get, Post, Route, Request, Security } from "tsoa";
import { SearchPostModel } from "../externalModels/SearchPostModel";
import { SearchResponseModel } from "../externalModels/SearchResponseModel";
import { AuthenticatedRequestModel } from "../middlewares/authenticatedRequestModel";

@Route("api/search")
@Security("fake_user_id")
export class SearchController extends Controller {
    @Get()
    public async getRandom(@Request() request: AuthenticatedRequestModel): Promise<({ randomNumber: number, userId: string | undefined })> {
        return {
            randomNumber: 9,
            userId: request.user?.userId
        }
    }

    @Post()
    public async search(@Body() searchData: SearchPostModel): Promise<SearchResponseModel> {
        // todo refactor and add DI        
        const aoeApiBaseUrl = process.env.AOE_API_BASEURL

        if (!aoeApiBaseUrl) {
            throw new Error('Add AOE_API_BASEURL to env')
        }

        const aoeApiSearchUrl = `${aoeApiBaseUrl}/search`

        const response = await axios.post(aoeApiSearchUrl, searchData)

        // todo search history logging goes here
        return response.data
    }
}
