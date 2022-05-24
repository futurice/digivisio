import { Pool } from 'pg'
import { getRequiredEnvVariable } from '../utils'

const pool = new Pool({
    user: getRequiredEnvVariable('POSTGRES_USER'),
    host: getRequiredEnvVariable('POSTGRES_HOST'),
    database: getRequiredEnvVariable('POSTGRES_DB'),
    password: getRequiredEnvVariable('POSTGRES_PASSWORD'),
    port: 5432,
})

export default pool
