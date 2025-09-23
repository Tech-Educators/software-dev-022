// I need to import the express code from my node modules
import express from "express";


// I create an instance off my express app
const app = express();

// get is a method

// I want to listen for a get request
// Our server sits around all day waiting for someone to make a request to it

// There are two arguments
// Where did they send the request
// A function to run when the request happens. (A a callback!)

// the function will always have two parameters
// request - infromation about the request from the client
// response - methods on it to allow us to responsd to the request.

// We've told our server how to respond when a get request happens on the root route (/)
app.get("/", (request, response) => {
  response.send("You are looking at my root route. How roode.");
});

// lets pretend this is data from a database

app.get("/owls", (request, response) => {
    // when a client makes a get request to localhost:8080/owls, send back JSON of the owls array.
  response.json('Pretend this is a list of owls');
});

app.post("/owls", (request, response) => {
    response.json('This is the post endpoint of owls')
})

app.put('/owls', (request, response) => {
    response.json('put request on owls route')
})

app.delete('/owls', (request, response) => {
    response.json(`Someone is trying to delete an owl! How rude >:()`)
})

// I need to tell my server to listen for things
app.listen(8080, () => {
  console.log(`Server running on Port 8080`);
});
