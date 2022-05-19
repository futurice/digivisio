import axios from "axios";
import { Body, Controller, Get, Post, Route, Request } from "tsoa";
import { SearchPostModel } from "../externalModels/SearchPostModel";
import { SearchResponseModel } from "../externalModels/SearchResponseModel";

@Route("api/search")
export class SearchController extends Controller {
    @Get()
    public async getRandom(@Request() request: any): Promise<({ randomNumber: number })> {
        console.log(request?.headers)
        console.log(request?.user)
        return { randomNumber: 9 }
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
        return response.data
    }
}
