const countDisplay = document.getElementById('count')
const button = document.getElementById('btn')


// our objective is to have a button that when we click on it our count goes up my one

// if there is something in localstorage, set count to be that value. If localStorage.getItem returns null (because theres nothing in local storage) assign count to be 0. 
// its good practice to make sure our result from local storage is a number.

// assign to the variable 'count' 
// call localstorage.get item -> this will give back a string of our number
// turn that string into a number using Number()
// or if it's null, return 0 and store that in count
let count = Number(localStorage.getItem('count')) || 0;
countDisplay.innerText = count

button.addEventListener('click', function() {
    console.log(count)
    count += 1
    countDisplay.innerText = count
    localStorage.setItem('count', count)
})

// console.log(localStorage.getItem('count'))