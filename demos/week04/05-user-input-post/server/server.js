// this is an npm package and has its own special way of being import
import express from "express"
// cors allows our server to responsd to requests from other servers
import cors from "cors"
// we need curley brackets for this kind of importing
// my bee veraible is just js from another file I created, and has it's own way of being imported
import { bees } from "./data.js"

// set up app
const app = express()

// this lets cors actually do it's work
app.use(cors())

// our servers dont know how to read JSON on their own, so we need to tell them how to
app.use(express.json())

console.log(bees)

app.get('/', (req, res) => {
    res.status(200).json({message: 'On the root route.'})
})

app.get('/bees', (req, res) => {
    // server tell the client the request was good (200 means ok) 
    res.status(200).json(bees)
})


app.post('/bees', (req, res) => {
    // where will the infromation the client sent us in the post request be?
    console.log(req.body)
    bees.push(req.body)
    res.send("Added bee to database! (dont let the server ever go down)")
})


app.listen(8080, () => {
    console.log(`Server running on http://localhost:8080 (*・‿・)ノ⌒*:･ﾟ✧`)
})