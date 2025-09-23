import express from "express"
import dotenv from "dotenv"

// instansiate my express app

const app = express()

// Pulls in the variables from .env file into our environment
dotenv.config()


// This line allows our server to read JSON from requests
app.use(express.json())


console.log(process.env.MY_NAME)
console.log(process.env.MY_PET)

// http://localhost:8080/
// we get a cannot 'get' 'error' because we havn't told this expres app a route handler for '/'
app.get('/', (request, response) => {
    response.status(200).json('Looking at my root route')
})

app.get('/owls', (request, response) => {
    response.status(203).json({message: "Hello"})
})

app.get('/photos', async (request, response) => {

    // we'll send a fetch request to unsplash
    const photos = await fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=puppy`)
    const data = await photos.json()

    response.status(200).json(data)
})

// star my app
app.listen(8080, () => {
    console.log(`The server is running on http://localhost:8080`)
})