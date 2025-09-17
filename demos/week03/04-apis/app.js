console.log('testing')
const image = document.getElementById('image')

// asynchornous - 'do this code when you can'
async function fetchData() {
    // we make it async because we dont know how long the request will take to finish
    // fetch means - make a request to this url 
    // await is the part that says 'come back to this later'
    // this first part only starts the request - to get something called 'headers'.
    const response = await fetch(`https://api.github.com/repos/facebook/react`)

    // get the actual data
    // read the stream given to us. 
    const data = await response.json()

    console.log(data)

    image.src = data.image
}

fetchData()