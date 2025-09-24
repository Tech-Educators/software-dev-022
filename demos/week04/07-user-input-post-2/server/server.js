import express from "express"
import cors from "cors"
import dotenv from "dotenv"

// set up my app

const app = express()

// cors - means - cross origin resource sharing
// our servers by default dont want to talk to other servers
// cors allows us to tell our server 'you can accept requests from anyone'.
app.use(cors())

// tell our server how to read json!
app.use(express.json())

// listen for a post request on /user
// and a function to run when that request happen.

// the callback function gets two parameters

// we also call this overall peice of code a request handler
app.post('/user', (request, response) => {
    // the client will always send infromation on the 'body' of the request
    // request.body
    console.log('The client sent me this:', request.body)
    response.status(200).json({message: "User details recieved"})
})

app.listen(8080, () => {
    console.log(`Server running on PORT 8080 http://localhost:8080`)
})