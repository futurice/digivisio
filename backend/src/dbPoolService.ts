import { Pool } from "pg"

// todo uh.. ok in node world this is probably fine...
const pool = new Pool({
    user: 'postgres',
    host: 'postgres',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

// const getConnectionPool = () => pool

export default pool