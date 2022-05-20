import { SearchPostModel } from "../externalModels/SearchPostModel";
import pool from "./dbPoolService";

export type SearchHistoryRowModel = {
    id: number
    date_saved: string,
    user_id: string
    search_term: string
}

/**
 * Search history for users
 */
export class SearchHistoryService {

    /**
     * Write search history for user
     * @param userId 
     * @param payload 
     */
    public async write(userId: string, searchData: SearchPostModel): Promise<void> {
        await pool.query('INSERT INTO search_history (user_id, search_term) VALUES ($1, $2)', [userId, JSON.stringify(searchData)]);
    }

    /**
     * Fetch learning material metadata from the aoe.fi API
     * @param userId 
     * @returns search history rows in descending order
     */
    public async getSearchHistory(userId: string): Promise<ReadonlyArray<SearchHistoryRowModel>> {
        const result = await pool.query<SearchHistoryRowModel>('SELECT * FROM search_history WHERE user_id = $1 ORDER BY date_saved DESC LIMIT $2', [userId, 50]);
        return result.rows;
    }
}