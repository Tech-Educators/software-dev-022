const colours = {
    red: 172,
    green: 124,
    blue: 226,
}

console.log(colours)

localStorage.setItem('colours', colours)

'h1[object Object]'
// this is no good because putting things in local storage turns them into an string, and objects turned into strings turn into '[object Object]'. 
// [object Array]
// [object Number]
const fromLocalStorage = localStorage.getItem('colours')

console.dir(fromLocalStorage)

const aNiceRedColour = {
    red: 213,
    green: 75,
    blue: 75
}
console.log(aNiceRedColour)

//1. Turn it into JSON
const stringifiedColours = JSON.stringify(aNiceRedColour)
console.log(stringifiedColours)

//2. Now we can store in localStorage
localStorage.setItem('aNiceRedColour', stringifiedColours)

//3. get it back from local storage
const coloursFromLocal = localStorage.getItem('aNiceRedColour')
console.log(coloursFromLocal)

//4. Turn it back into a regular object
const coloursParsed = JSON.parse(coloursFromLocal)

console.log(coloursParsed)

// stringify, setitem, getitem, parse. 

// if you want to be fancy and do these steps in less lines.
// Just remember BIDMAS!
localStorage.setItem('data', JSON.stringify({
    foo: 'bar',
    name: 'Sam'
}))
JSON.parse(localStorage.getItem('data'))