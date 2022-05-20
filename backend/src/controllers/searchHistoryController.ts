import { Controller, Get, Route, Request, Security, Tags } from "tsoa";
import { AuthenticatedRequestModel } from "../middlewares/authenticatedRequestModel";
import pool from "../dbPoolService";

export type SearchHistoryRowModel = {
    id: number
    date_saved: string,
    user_id: string
    search_term: string
}

@Route("api/searchhistory")
@Security("fake_user_id")
@Tags('SearchHistory')
export class SearchHistoryController extends Controller {
    @Get()
    public async getSearchHistory(@Request() request: AuthenticatedRequestModel): Promise<SearchHistoryRowModel[]> {
        try {
            const result = await pool.query<SearchHistoryRowModel>('SELECT * FROM search_history WHERE user_id = $1 ORDER BY date_saved DESC LIMIT $2', [request.user?.userId, 50]);
            return result.rows;
        }
        catch (error: unknown) {
            console.error('uh oh...');
            throw error;
        }
    }
}
