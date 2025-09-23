// Import express
import express from "express"

// instansite our express app
const app = express()

app.use(express.json())


// setup our root endpoint
app.get('/', (request, response) => {
    response.json("On the root route")
})

// start the server
app.listen(8080, () => {
    console.log('App running on port 8080')
})