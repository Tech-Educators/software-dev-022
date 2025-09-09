console.log('Running...')

const myArray = ['Sam', 'Connr', 'Tim']

// I can access elements of the arary by using []'s

console.log(myArray[1]) //Connr
console.log(myArray)


const colours = ['Red', 'Orange', 'Yellow', 'Blue']

// Array methods
// Array methods are functions that come with javascript that we can use on arrays to change them

// addds a new element to the end of the arraykk
colours.push('Green')

// removes the last item in the array
colours.pop()

// add an item to the beginning of the array
colours.unshift('purple')

// we can assign an index to be somethign else/have a different value
colours[2] = 'Not Orange'

// shift removes an element from the beginning of the arry
colours.shift()

console.log(colours)
// add an item at a specific index
colours.splice(1, 0, "Teal")

// splice(indexStartPoint, number of items delete, whatItemToAdd)
colours.splice(2, 3, 'Crimson')

console.log(colours)

console.log(colours.length)

colours.length // 3

// how can I always get the last element of the array? Array is any size. 

colours[colours.length - 1] // Crimson