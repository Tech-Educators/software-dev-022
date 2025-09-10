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


button.addEventListenLisnter('click', function() {})

Array.forEach(function() {})












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