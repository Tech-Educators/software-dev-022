console.log('Testing...')


function runsOtherFunction(unicornsAndRainbows) {
    console.log(unicornsAndRainbows)

    unicornsAndRainbows()

}

// the anonymous functions is a callback function because it's a function we pass to another fucntion (runsOtherFunction) as an argument 

runsOtherFunction(function() {
    console.log('Helloooooo callbacks I love you!')
})

// runsOtherFunction(true)


// button.addEventListenLisnter('click', function() {})

// Array.forEach(function() {})

// logs a string to the console to tell the user the function was called
function notifyUser() {
  console.log("notifyUser function was called!");
}

// accepts a function as an argument to run when it has done it's work
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}

// run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);










function functionDefinition() {
    // this is a function!
}

// function expresions

const functionExpression = function() {
    // this is also a function
}
functionExpression()











// function sum(a) {
//     console.log(a)
// }

// sum(5)




// closure
function makeFunction(number) {
    return function(number2) {
        return number + number2
    }
}

const addFive = makeFunction(5)

// addFiveIsAFunction 

const addFiveToTen = addFive(10)
console.log(addFiveToTen)




// function definition
function hello() {}

// function expression
const hello2 = function() {
    // this is one funciton
}

hello2()

// arrow
const arrowFunction = () => {
    // this is a seperate function
}

arrowFunction()