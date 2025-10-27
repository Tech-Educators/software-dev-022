import {Pool} from "pg"

export function connect() {
    return new Pool({connectionString: process.env.DB_CONN})
}

/// so I dont have to keep writing my conneciton string stuff out again
