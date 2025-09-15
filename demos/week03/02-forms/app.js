// 1. grab the form element 
const form = document.getElementById('form')

// 2. listen forthe submit event on the form
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    // stops my page from refreshing upon submission.
    console.log(event)
    event.preventDefault()

    // I can use the event object to get the information the user typed in
    console.log(event.target[0].value)
    console.log(event.target.username.value)
    console.log(event.target.password.value)
}

// this code is more complex on the surface, but it works for any number of inputs, and the steps are the same everytime


form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    // createa this conveniant thing
    // this line says 'look at my form and create an object out of the inputs and values'
    // new FormData(form) compiles all the input names and values
    // the form argument here is refering to the 'form' element we grabbed at the top of the page
    const data = new FormData(form)

    console.log(data)

    // turn our FormData into a real object

    const userData = Object.fromEntries(data)
    console.log(userData)
})