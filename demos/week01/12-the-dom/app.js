console.log('We are checking..')


// lets modify the p tag we made to say something else 

// 1. Select the p tag in my javascript

const myPTag = document.getElementById('greeting')

console.dir(myPTag.innerText)

// 2. lets change the text

myPTag.innerText = 'I changed this with javascript'

myPTag.style.backgroundColor = 'red'
myPTag.style.fontFamily = 'monospace'
myPTag.style.color = 'white'


// Lets create a new element

// 1. create a header element using doucment.createElement

const myMarquee = document.createElement('marquee')

// 2. .innerText to change the text
myMarquee.innerText = `You cant stop me making maruqeeeeee!'s`

// 3. Add it to the DOM so it show up on the page
document.body.appendChild(myMarquee)

// document.getElementById('div').appendChild(myMarquee)
