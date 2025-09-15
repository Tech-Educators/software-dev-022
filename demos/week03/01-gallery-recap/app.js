
const thumbnails = document.getElementById('thumbnails')
const displayContainer = document.getElementById('displayContainer')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')



// we need a variable to track the curernt index of the image being displayed

let currentImageIndex = 0;
// Create an array of images



const images = [
    {
        src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'El Capitan on a sunny afternoon'
    },
    {
        src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'A foggy forest in Adjara, Georgia'
    },
    {
        src: 'https://images.unsplash.com/photo-1539477857993-860599c2e840?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Some flowers in Shibuya-ku, Japan'
    }
]

function createThumbnails() {
    // I am going to loopp through all of my images array and for eahc image create an image tag and set it's content to be the information in the image object

    images.forEach(function(image, index) {
        // image is the image object (from above)
        let imageElement = document.createElement('img')
        console.log(`current image is`, image)
        // imageElement is the actual <img /> tag.
        imageElement.src = image.src
        imageElement.setAttribute('tabindex', '0')

        imageElement.addEventListener('click', function() {
            console.log(image)
            // call this function and pass in the image that I've clicked on.
            createBigImage(image)

            // update my index when the user clicks.
            currentImageIndex = index
        })

        imageElement.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                createBigImage(image)
                currentImageIndex = index
            }
        })

        // append image elemnt to the dom
        thumbnails.appendChild(imageElement)
    })
}

createThumbnails()

// createBigImage is expecting to get an object as an argument
// 
/*
{
    src: 'something',
    alt: 'something',
}
*/
function createBigImage(imgDetails) {
    // to reset my displayContainer to have nothing in it before we make the image
    displayContainer.innerHTML = ''
    const bigImage = document.createElement('img')

    bigImage.src = imgDetails.src
    bigImage.alt = imgDetails.alt
    
    displayContainer.appendChild(bigImage)
}


rightButton.addEventListener('click', () => {
    currentImageIndex += 1
    // console.log(images[currentImageIndex], currentImageIndex)


    if (currentImageIndex > images.length - 1) {
        // if we keep going to the right and hit the end of the array, rest the current Image index to 0 so we loop back to the beginning.
        currentImageIndex = 0
    }
    createBigImage(images[currentImageIndex])
})
// rightButton.addEventListener('click', function() {})

leftButton.addEventListener('click', () => {
    currentImageIndex -= 1

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1
    }
    createBigImage(images[currentImageIndex])
})


// listening for left and right arrow keys

window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        // create big images
    } else if (event.key === 'ArrowRight') {
        // also create big image
    }
})