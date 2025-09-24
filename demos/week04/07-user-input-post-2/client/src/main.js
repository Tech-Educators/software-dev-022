// 1. get form by id

const form = document.getElementById('form')

// 2. Listen for submit 

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    // 1. Create weird formdata object
    const data = new FormData(form)
    // 2. Turn weird formdata object into normal object
    const userInput = Object.fromEntries(data)

    console.log(userInput)
    // how to send user input to my sever?

    // fetch by default sends a get request
    // so we'll give another argument to say send a post request
    const serverResponse = await fetch(`http://localhost:8080/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInput)
    })
})