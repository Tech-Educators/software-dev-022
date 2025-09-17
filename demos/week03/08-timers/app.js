
// giving it a named function to run after 4 seconds
function sayHello() {
    console.log('Hello')
}
setTimeout(sayHello, 4000)

// can also give it an anonymous function 
setTimeout(function() {
    console.log('Goodbye')
}, 1000)

// can also give it an anonymous arrow function
setTimeout(() => {
    console.log(`Hows the weather?`)
}, 2000)

// setInerval triggers repeatedly after a set amount of time
// this code will run forever - we can use ctrl+c to stop it. 
// to clear our timers programmatically, we need to assign the timer to a variable 
const interval = setInterval(() => {
    console.log('this is also a function')
}, 1000)


setTimeout(() => {
    // and then call clear interval and give it the setInterval we set up earlier
    clearInterval(interval)
}, 5000)


const boomTimer = setTimeout(() => {
    console.log(`BOOM`)
}, 10000)

setTimeout(() => {
    clearTimeout(boomTimer)
    console.log('Bomb defused')
}, 5000)

// let count = 0;
setInterval(function() {
    count++
    console.log(count)
}, 1000)