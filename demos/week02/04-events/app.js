console.log('testing, testing')

// Events are any action that your user takes on the site - 
// clicking on something, pressing a button on the keyboadring, hovering on something, typing into an input

// addEventListener takes two arguments
// what event to listen for 
// what function to run when that event happens.
// javascript allows us to listen for these events happenign

// 1. get the button by its id
const button = document.getElementById('button')

// 2. add an event listener to tell javascript to 'listen' for when a particular events happens to that element

function handleClick() {
    // alert('Hello')
    console.log('User clicked on the button')
}

// DO NOT add parenthesis - we'll allow the EventListner to control when the function runs, we don't need to tell it to
button.addEventListener('click', handleClick)


// anonymous functions

const secondButton = document.getElementById('second-button')

// we're giving it an 'anonymous' function - just a function without a name. mainly because I'm not going to reuse this function anywhere else in my code, it's just being attached to the event listener. 
secondButton.addEventListener("mouseover", function() {
    console.log('This is a hovereable button')
})

const thirdButton = document.getElementById('third-button')


// whenever we give a function to addEventlistern, that funtion gets an argument of the 'event object' 
thirdButton.addEventListener('click', logEvent)

// I can get that 'event object' by giving the function given to addEventListener a parameter
function logEvent(event) {
    console.log(event)
}