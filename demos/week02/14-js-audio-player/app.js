// 1. Get all the buttons

const audio = document.getElementById('rain')

const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
const stopButton = document.getElementById('stop')
const skipFor = document.getElementById('skipForward')
const skipBack = document.getElementById('skipBackward')
const scrubForward = document.getElementById('scrub')

// 2. I want to know when the user has clicked on the play button

playBtn.addEventListener('click', function() {
   console.dir(audio) 
   audio.play()
})

pauseBtn.addEventListener('click', function() {
    audio.pause()
})

stopButton.addEventListener('click', function() {
    // console.log(audio.currentTime)
    audio.pause()
    audio.currentTime = 0;
})

skipFor.addEventListener('click', function() {
    // the current time should be itself + 10
    // currentTime = currentTime + 10
    audio.currentTime += 10
})

skipBack.addEventListener('click', function() {
    audio.currentTime -= 10
})


let holdingButton = false

scrubForward.addEventListener('mousedown', function(event) {
    // while the mouse is being held 
    console.log(event)
    holdingButton = true
    // when we press the button lets add 10 seconds to the current every second 

    // i'll use a function called setInterval
    // a funciton
    // time (in milisecionds)
    const interval = setInterval(function() {
        if (holdingButton == false) {
            return;
        }
        audio.currentTime += 10
    }, 1000)

    if (audio.currentTime > audio.duration && holdingButton != true) {
        clearInterval(interval)
    }
})

scrubForward.addEventListener('mouseup', function(event) {
    holdingButton = false;
    console.log('stopped holding butotn')
})
