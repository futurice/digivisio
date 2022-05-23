import type { SearchPostModel } from '../externalModels/SearchPostModel'
import pool from './dbPoolService'

export type SearchHistoryRowModel = {
    id: number
    date_saved: string
    user_id: string
    search_term: string
}

export type ApiRequestHistoryRowModel = {
    id: number
    date_saved: string
    user_id: string
    api_url: string
    request_body: string
}

/**
 * Search history for users
 */
export const SearchHistoryService = {
    /**
     * Write search history for user
     * @param userId
     * @param searchData
     */
    write: async (userId: string, searchData: SearchPostModel): Promise<void> => {
        await pool.query('INSERT INTO search_history (user_id, search_term) VALUES ($1, $2)', [userId, JSON.stringify(searchData)])
    },

    /**
     * Write api request history
     * @param userId
     * @param apiUrl
     * @param requestBody
     */
    writeApiRequest: async (userId: string, apiUrl: string, requestBody: unknown): Promise<void> => {
        await pool.query('INSERT INTO api_requests (user_id, api_url, request_body) VALUES ($1, $2, $3)', [userId, apiUrl, JSON.stringify(requestBody)])
    },

    /**
     * Fetch learning material metadata from the aoe.fi API
     * @param userId
     * @returns search history rows in descending order
     */
    getSearchHistory: async (userId: string): Promise<ReadonlyArray<SearchHistoryRowModel>> => {
        const result = await pool.query<SearchHistoryRowModel>('SELECT * FROM search_history WHERE user_id = $1 ORDER BY date_saved DESC LIMIT $2', [userId, 50])
        return result.rows
    },

    /**
    * Get all api call history
    * @returns api request history
    */
    getApiRequestHistory: async (): Promise<ReadonlyArray<SearchHistoryRowModel>> => {
        const result = await pool.query<SearchHistoryRowModel>('SELECT * FROM request_history ORDER BY date_saved')
        return result.rows
    },
}
