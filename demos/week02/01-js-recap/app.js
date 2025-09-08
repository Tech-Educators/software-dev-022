console.log(`Testing, testing...`);

// three data types: number, strings, boolean
const myString = `Hello`;
const myNumber = 42;
const myBool = true;

// use variables to store data so it can be referenced later

const userName = `Connor`;
// userName = `Connor2`
let userCity = `Hull`;
userCity = "Norwich";

// we can change varibles declared with let during the runtime, and we cannot change variables declared with conts.

// operators
// 5 * 5
// 5 + 5
// 5 / 5
// 5 - 5
//

// logical operators
// true && true // true
// false && true // false
// false || true // true
// 5 != 5 // false
// 5 != 4 // true

// comparison operators
5 >= 6;
6 <= 9;
9 > 5;
5 < 2;

6 == 6;
6 === "6";

// truthy falsey

// 5 is 'truthy' value - it exists
5 && 5; // true

"string" || null; // true - string is a truthy value and null is falsey

"" || " "; // "" is falsy but " " is truthy

// ON && returning values
/*
More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy. */


let myWeather = 'sunny'

// in our condition, we need some sort of expression that evaluates to true or false
if (myWeather == 'rainy') {
    console.log('bring an umbrella')
} else if (myWeather == 'sunny') {
    console.log('wear sunscreen')
} else {
    console.log(`I don't know what weather type that is!`)
}


// element.appendChild - we use this for adding something to the dom

// .textContent - to change test

// document.querySelector && document.getElemebyById - both used for selecting an element

// querySelector - you give a css query ('p' or '.class')

// getElemebyById - give it an id of something in your p tag


// 1. select our tag to change

const pTag = document.getElementById('greeting')

// 2. change the text content

pTag.textContent = 'Somethign else'


// lets create a new element and add it 

const heading = document.createElement('h2')

// adjust the content
heading.textContent = 'This element was made in js'

heading.setAttribute('class', 'cool-text')
heading.classList.add('another-class')
heading.className = heading.className + ' overwrites-classes'

// change styling
heading.style.backgroundColor = 'red'

console.log(heading)

// document.getElementById('container').appendChild(heading)
const container = document.getElementById('continer')
container.appendChild(heading)

// document.body.div.appendChild(heading) // we can't do this because js said so. 


// .textContent or .className = 'properties' 

// .log, .appendChild = 'methods'


// if our website is running on external data 
// if our website is interactive or dynamic
// if we don't know the content ahead of time