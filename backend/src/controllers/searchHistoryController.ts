import { Controller, Get, Route, Request, Security } from "tsoa";
import { AuthenticatedRequestModel } from "../middlewares/authenticatedRequestModel";
import { Pool } from 'pg';

export type SearchHistoryRowModel = {
    id: number
    date_saved: string,
    user_id: string
    search_term: string
}

@Route("api/searchhistory")
@Security("fake_user_id")
export class SearchHistoryController extends Controller {
    @Get()
    public async getSearchHistory(@Request() request: AuthenticatedRequestModel): Promise<SearchHistoryRowModel[]> {

        // todo move this out of here...
        const pool = new Pool({
            user: 'postgres',
            host: 'postgres',
            database: process.env.POSTGRES_DB,
            password: process.env.POSTGRES_PASSWORD,
            port: 5432,
        })

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
