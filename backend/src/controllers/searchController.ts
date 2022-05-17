import axios from "axios";
import { Body, Controller, Get, Post, Route, } from "tsoa";
import { SearchPostModel } from "../externalModels/SearchPostModel";

@Route("search")
export class SearchController extends Controller {
    @Get()
    public async getRandom(): Promise<({ randomNumber: number })> {
        return { randomNumber: 9 }
    }

    @Post()
    public async search(@Body() searchData: SearchPostModel): Promise<unknown> {
        // todo refactor and add DI    
        const aoeApiBaseUrl = process.env.AOE_API_SEARCH_BASEURL

        if (!aoeApiBaseUrl) {
            throw new Error('Add AOE_API_SEARCH_BASEURL to env')
        }

        const response = await axios.post(aoeApiBaseUrl, searchData)
        return response.data
    }
}
