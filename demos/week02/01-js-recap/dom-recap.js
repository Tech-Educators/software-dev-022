// @ts-nocheck
// 1. select the element I want to change
const greeting = document.getElementById('greeting')

console.dir(greeting)

greeting.textContent // text content
greeting.id // gives me the id of the element
greeting.innerHTML // edit textcontent or add a child element
greeting.style // can add css styles

// textContent/id/innerHTML - variables (properties) about the ptag. As we know, we can change variables to be equal to somethign else

greeting.textContent = 'I can change the text content by assigning it be something else'


let myNumber = 5
myNumber = 3

// we can select another element here for example - it has the same properties as other 
const goodbye = document.getElementById('goodbye')
goodbye.textContent



// creating a new element
// make a new element - document.createElement()
// edit the contents of it .textContent = ""
// add it to the dom - document.body.appendChild()

const myNewElement = document.createElement('marquee')
myNewElement.textContent = 'Wheeeee!'
myNewElement.setAttribute('direction', 'up')
// myNewElement.direction = 'down'
// to the body, add as a child, myNewElement
document.body.appendChild(myNewElement)


document.body.setAttribute('style', `background-color: tomato`)
// document.body.style.backgroundColor = 'blue'



// in cs background-color
// in js backgroundColor - no dashes because we cant have 