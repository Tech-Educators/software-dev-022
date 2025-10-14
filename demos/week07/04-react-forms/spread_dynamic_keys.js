const episode6 = {
    series: 'Star Wars',
    title: 'Episode 6',
    director: 'Richard Marquand',
    genres: ['Sci fi', 'Not history', 'Not alt-history', 'how did humans even get there']
}

const episode7 = {...episode6, director: 'j.j abrams', title: 'Episode7'}

// episode7.director = `J.J. Abrams`
// episode7.title = 'Episode 7'

console.log(episode6)
console.log(episode7)


const myJob = 'instructor'

const mySelf = {
    name: 'Sam',
    age: 26,
    dogs: ['Darcy', 'Charlie'],
    [myJob]: 'fofosdfsdfsd'
}
console.log(mySelf)
// wrapping myJob in []'s means it will go read the variable value and use that as the key.