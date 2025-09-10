console.log('testing')

// A method is a function that is part of an object


const bird = {
    colour: 'Brown',
    wingspan: 24,
    fly: function(location) {
        console.log(`The bird flies to ${location}`)
    },
    squawk: function() {
        console.log('The bird squawks angrily')
    },
    getWingSpan: function() {
        // 'this' keyword - refers to 'this' object that the method is on. 
        console.log(this)
        return this.wingspan
    }
}

bird.fly(`London`)
// fly('New York') -> the fly method only exists on the bird object, so we can't use it without chaining in the object

bird.squawk()

const wingspan = bird.getWingSpan()
console.log(wingspan)



// we love using methods

console.log() // log() is a method

// 'sam'.split() // split() is a string method

const h2 = document.createElement('h2') // createElement() is a method of the document object
window.alert('Hello')
document.getElementById('tag') // method


// changethe property of the h2 object to be something else
h2.innerText = 'Something else'

document.body.appendChild(h2)