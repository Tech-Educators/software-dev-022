let isRunning = false;

const button = document.getElementById('button')
const div = document.getElementById('count')
let interval;
let counter = 0;

button.addEventListener('click', function() {
    // if isRunning is false
    if (!isRunning) {
       isRunning = true
       interval = setInterval(function() {
        counter++
        div.innerText = counter
       }, 1000) 
    } else {
        isRunning = false;
        clearInterval(interval);
    }
})