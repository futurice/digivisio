import dotenv from 'dotenv';

dotenv.config()

/**
 * Get a required env variable
 * Throw error if value is undefined or an empty string
 * @param key 
 * @returns value
 */
export const getRequiredEnvVariable = (key: string): string => {
    const value = process.env[key];
    if (value === undefined || value === '') {
        throw new Error(`Missing required env variable: '${key}'`);
    }

    return value
}