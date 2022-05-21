import { Controller, Get, Route, Request, Security, Tags } from 'tsoa'
import { AuthenticatedRequestModel } from '../middlewares/authenticatedRequestModel'
import { SearchHistoryRowModel, SearchHistoryService } from '../services/loggingService'

@Route('api/searchhistory')
@Security('fake_user_id')
@Tags('SearchHistory')
export class SearchHistoryController extends Controller {
    /**
     * Get search history
     * @param request
     * @returns
     */
    @Get()
    public async getSearchHistory(@Request() request: AuthenticatedRequestModel): Promise<readonly SearchHistoryRowModel[]> {
        try {
            return await SearchHistoryService.getSearchHistory(request.user.userId)
        } catch (error: unknown) {
            console.error('uh oh...')
            throw error
        }
    }
}
