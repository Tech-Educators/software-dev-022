// import all the packages
import express from "express"
import cors from "cors"
import pg from "pg"
import dotenv from "dotenv"

// setup express
// app.use()

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})
// create / endpoint just to test



// create end point that queries the database for 'posts' and returns them


// create a POST endpoint that inserts new posts from the client into your database 



// app.listen()


// https://github.com/Tech-Educators/software-dev-022/blob/main/demos/week04/09-database-monorepo-jokes-app/server/server.js
// cd into my server and run node --watch server


app.listen('8080', () => {
    console.log(`Server running`)
})