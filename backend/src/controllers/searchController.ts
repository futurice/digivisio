import axios from 'axios'
import { Body, Controller, Post, Route, Request, Security, Tags } from 'tsoa'
import type { SearchPostModel } from '../externalModels/SearchPostModel'
import type { SearchResponseModel } from '../externalModels/SearchResponseModel'
import type { AuthenticatedRequestModel } from '../middlewares/authenticatedRequestModel'
import { getRequiredEnvVariable } from '../utils'
import { SearchHistoryService } from '../services/loggingService'

@Route('api/search')
@Security('fake_user_id')
@Tags('Search')
export class SearchController extends Controller {
    /**
     * Search eoa database with filters
     * @param request
     * @param searchData
     * @returns
     */
    @Post()
    // eslint-disable-next-line space-before-function-paren
    public async search(@Request() request: AuthenticatedRequestModel, @Body() searchData: SearchPostModel): Promise<SearchResponseModel> {
        const aoeApiBaseUrl = getRequiredEnvVariable('AOE_API_BASEURL')

        const aoeApiSearchUrl = `${aoeApiBaseUrl}/search`

        const response = await axios.post(aoeApiSearchUrl, searchData)

        try {
            await SearchHistoryService.write(request.user.userId, searchData)
            await SearchHistoryService.writeApiRequest('', aoeApiSearchUrl, searchData)
        } catch (error: unknown) {
            console.error('uh oh...')
            throw error
        }

        return response.data
    }
}
