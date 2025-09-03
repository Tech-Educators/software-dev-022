console.log('Hello world!')
console.log(false)
console.log(5)

// variable
// a variable is a way to store information so we can refer to it again later

// const cannot be changed after creation
const myName = 'Sam'
// the line below causes an error, because we cannot change them
// myName = 'Sammy'

// let variables can be changed after creation
let mySurname = 'Louloudis'
// we can update the value
mySurname = 'LeLedis'

// we'll default to using const 99% of the time

// Booleans
const myHairIsLong = true
const iLovePython = false

// Strings
const string1 = "sam"
const string2 = 'This is another string'
const string3 = `I can use many '''''' and """""'s and it doesn't get confused`
const string4 = '42! () {}}SDas * %$@£!@! '

// Numbers

const number = 42
const number2 = -32
const number3 = 50.00
const number4 = -55.55

// variable names in js don't matter - we can name them whatever we like (within reason)
const sdfjafawerwe = 'Hello'

const myTitleIsThis = 'This is called cammel case'


// Operators

let a = 1
let b = 2
let c = 3

const addSomeNumbers = a + b //3
console.log(addSomeNumbers)

const addSomeStrings = 'a' + 'b' //ab
console.log(addSomeStrings)

const cMinusB = c - b // 1

// multiply 
const aSquared = 2 * 2 // 4 
console.log("the value of 2 * 2", aSquared)

// divide 
const bDividedBy3 = b / c
console.log(bDividedBy3)


// we can also compare values to eachother

const isABiggerThanC = a > c // false
console.log(isABiggerThanC)


// the equality operator (===) and checking if a is the same value as 1
const isAOne = a === '1' // true
console.log(isAOne) 


// = - assignment operator (a IS one)
// == - equality operator (is a one)
// === - strict equality operator (is a also the number one) (checks value and data type)
// != - check if something is not equal to something else


const myPet = 'Darcy'

// concatination (adding a string together)
const myInformation = 'My name is Sam, and I have a pet named ' + myPet + '.'
console.log(myInformation)

// template literals
const myInformationInTemplates = `My name is Sam, and I have a pet named ${myPet}.`
console.log(myInformationInTemplates)



console.log(2 != 4) // true