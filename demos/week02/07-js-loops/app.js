console.log('running')


// FOR LOOP

for (let counter = 0; counter < 5; counter = counter + 1) {
    console.log(counter)
}

// i++ just means add one to the current value of i
for (let i = 0; i < 5; i++) {
    // console.log(`The value of i is ${i}`)
}


// WHILE LOOP

let counter = 0

// while the condition is true, do the code in the codeblock
while(counter < 10) {
    // console.log(`While loop running on ${counter} iteration`)
    counter++
}



// let usernumber;
// do {
//      usernumber = prompt('Pick a number between 1 and 10')
//      console.log(usernumber)
//     //  run the loop while the condition in the brackets is true
// } while(!(usernumber > 0 && usernumber < 10))

    // samas crazzy brackets and ! operator
    // while(!(usernumber > 0 && usernumber < 10))



const coworkers = ['Connor', 'Tim', 'Jez', 'Manny', 'Joe']
coworkers[0] // Connor
coworkers[1] // tim


const myVar = 3
coworkers[myVar] //Manny

for (let i = 0; i < coworkers.length; i+= 2) {
    console.log(coworkers[i])

    // if we want to see the coworks printed on the page
    const h2 = document.createElement('h2')
    h2.innerText = coworkers[i]
    document.body.append(h2)
}

// for of loops
// if you don't want to bother with messing about with conditionals ect, for.. of... loops will just look at each element of the array one by one. 

for (const coworker of coworkers) {
    console.log('I work with ', coworker)
}

// for each thing in the array run 'this' function
// it takes a function as an argument
// that function gets the indiviaul array element as a parameter
coworkers.forEach(function(item) {
    console.log(`In forEach currently logging ${item}`)
})