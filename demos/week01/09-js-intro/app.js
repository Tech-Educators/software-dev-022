// varaibles

// three data types : strings, numbers, booleans

const Hello = 'This is a greeting'
const myNumber = 42
const myString = Hello
const myBoolean = true

// all this does is tell the browser to log the value of myBoolean to the console
console.log(myBoolean)
console.log(myString)


// undefined and null

// null = there is no value yet.
// if you don't know what the user details are yet because we're waiting for them to login or something
let myUserDetails = null;

console.log(myUserDetails)

// undefined
// you won't explictly assign a variable to be undinfed
// let myUndefinedVariable = undefined;

// it exists for when you decalre a variable without assigning it a value (you can only do this with let)
let undefinedVariable;
console.log(undefinedVariable)


// type of 

console.log(typeof myNumber)
console.log(typeof 'Hello World')
console.log(typeof true)


// concatiniting strings

const myCity = 'Liverpool'
const greeting = 'I live in ' + myCity + "!"
console.log(greeting)

// template literals 
// you have to use ``'s for template literals

const myProgrammingLanguage = 'JavaScript'
const tagline = `I mainly program in ${myProgrammingLanguage}!`

console.log(tagline)


// strings
'single quotes is fine'
"i'll double quotes is also fine"
// you can use aother quote marks as you like
`backtick's are also "fine"`

"```````````````````"