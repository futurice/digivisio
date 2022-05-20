import { Pool } from "pg"
import { getRequiredEnvVariable } from "./utils"

const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: getRequiredEnvVariable(' POSTGRES_DB'),
    password: getRequiredEnvVariable('POSTGRES_PASSWORD'),
    port: 5432,
})

export default pool
