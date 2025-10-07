
// Destructuring allows us to grab values out of more complex data types - arrays, object


let myObject = {
    name: 'Sam',
    age: 26,
    games: ['LoL', 'CS2', 'Elden Ring', 'Sim 4']
}


const myName = myObject.name

// create new variables from the object
// the left hand side needs to match up to the property name
let {name, age, games} = {
    name: 'Sam',
    age: 26,
    games: ['LoL', 'CS2', 'Elden Ring', 'Sim 4']
}

console.log(name) // Sam
console.log(age) // 26
console.log(games) // ['LoL'] 



const [one, two, three] = [1,2,3]

console.log(one) // 1