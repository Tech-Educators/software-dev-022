console.log('Testing...')

// declaring a function (prepare our spell)

function theFunctionName() {
    // what ever code we want to repeat
    console.log('Hello')
}

// invoking/calling the funciton

theFunctionName()


// const pickANumber = prompt('Pick a number')
// const userStringIntoNumber = Number(pickANumber)

// alertTheUserAboutTheirNumberPlus123(userStringIntoNumber)

function alertTheUserAboutTheirNumberPlus123(usersNumber) {
    alert(`Your number ${usersNumber} + 123 is ${usersNumber + 123}`)
}


// parameters
// we've made this function accpet a 'parameter' of 'number'. It's placeholder. 
// we can pass multiple parameters
function sum(number, number2) {
    // console.log(number)
    console.log(number + number2)
}

// giving the functions numbers - we give the function argumetns
sum(4,5)






function multiply(a,b) {
    return a * b
}
const importantCalculation = multiply(10, 2)


console.log(importantCalculation)



// sum(12412,23523)
// sum(12,43)