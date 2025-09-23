// I want to gt my list of bees from API and display them in my html.


async function fetchBees() {
    // start a request to my server to get my bees
    const response = await fetch(`http://localhost:8080/bees`)
    const bees = await response.json()

    bees.forEach(bee => {
        const div = document.createElement('div')
        const pCommon = document.createElement('p')
        const pFact = document.createElement('p')
        const habitat = document.createElement('p')
        const img = document.createElement('img')
        
        pCommon.innerText = bee.commonName
        pFact.innerText = bee.fact
        habitat.innerTExt = bee.habitat
        img.src = bee.imgSrc

        div.setAttribute('class', 'bee-container')
        div.append(pCommon, pFact, habitat, img)
        document.body.appendChild(div)
    })
}

fetchBees()



// dealing with form submissions
const form = document.getElementById('form')
// listen for the form submit event

form.addEventListener('submit', async function(event) {
    event.preventDefault()

    // 2 weird lines of code we can use to get all form data?

    const beeInformation = new FormData(form)
    // Turn into a regular JS object
    const data = Object.fromEntries(beeInformation)

    console.log(data)
    // we want to send the data varible to the server.
    // we will send a post request to the server along with our bee data.
    // if you dont give it a second argument, fetch will always do a get request. 
    const responseFromAPI = await fetch(`http://localhost:8080/bees`, {
        // tell it what method we're making this request with
        method: "POST",
        // what tpe of data are we sending
        headers: {
            "Content-Type": "application/json"
        }, 
        // we always put the main data of the request - in this case the information from the form, in the 'body' of the request
        body: JSON.stringify(data)
    })

})