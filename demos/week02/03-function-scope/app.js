console.log('Running..')



// scope is how we describe what variables our program has access to when it is running

// Global Variable - Are any variables declared outside of code blocks {} 

const myGlobalVariable = 'This variable can be used by all functions'

// Local variable - any variable defined inside a code block - we can only use them within the block they're defined.

function sayHello() {
    const userName = 'Sam'
    console.log(userName, myGlobalVariable)
}

sayHello()

// console.log(userName) // this will give us a 'Reference Error' because useerName is only defined within the sayHello function, and not available to the global scope. 


function hasManyVariables() {
    const myDog = 'Darcy'
    const myCity = 'Liverpool'
    const myHair = 'Brown'

    console.log(`My name is Sam, I live in ${myCity}, I have ${myHair} hair and I have a dog named ${myDog}`)
    // console.log(userName) // we can't do this because userName only exists within the 'sayHello' function

    return myDog
}

hasManyVariables()

const theDog = hasManyVariables()

console.log(theDog)

// console.log(myDog) 


if (true) {
    const fire = 'Fire'
}

// console.log(fire) // errors because any variable declared inside curly brackets is only available within those curly brackets  // a 'code block' 