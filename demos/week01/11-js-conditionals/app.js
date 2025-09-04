console.log('Is this connect properly?')


// if statement a sytax like this

/*
if (something is true) {
    // code to run
}
*/

// quality challenged film
let averageRating = prompt(`Rate the movie you watched (between 1 and 5)`) 

if (averageRating < 1) {
    alert(`You'll need to wash your eyes out from that one`)
} else if (averageRating >= 1 && averageRating < 2) {
    alert(`It some redeeming qualities`)
} else if (averageRating >= 2 && averageRating < 3) {
    alert(`Yes`)
} else if (averageRating >= 3 && averageRating < 4) {
    alert(`It was a good movie, but not great`)
} else if (averageRating >= 4 && averageRating < 5) {
    alert(`Id recommend to anyone! But it was missing something special`)
} else {
    alert('You must have watched the Bee movie')
}

// the && (AND) logical operator checks that the left and side of it both evaluate to true. 

5 == 5 && 3 == '3' // true
5 === 5 && 3 === '3' // false

true && true // true
true && false // false


if (averageRating < 5) {
    console.log('That movie must suck!')
    // even though the below condition is *also* true, it only runs the first 'passing' condition's code. 
} else if (averageRating < 4) {
    console.log('Its super terrible')
} else {
    console.log('This must be the greatest film ever (the bee movie)')
}



2 == 2 && 4 == 4 && 5 != 6 && 4 === 4


if (true) {
    // something
} else {
    // fine
}

if (true) {
    // fine
} else if (true) {
    // fine
}

// if something true do do that
// else if - allows us to check another condition 
// else - is a catchall - if we want to run some code if all previous conditions are false. 
