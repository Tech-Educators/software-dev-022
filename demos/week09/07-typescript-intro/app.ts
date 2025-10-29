// to install typestrip 
// npm i typescript
// convert to js with npx tsc app.ts





// what are our data types?

// number, string, booleon, object, array

// typescript is about defining what type our data.
const myName:string = 'Sam'
const myNumber:number = 54
const myBoolean: boolean = true

// const myString2:string = 34 // error

let foo: string = 'foo'
// foo = 34 // error


// Arrays 

// it should be an array of 1 element, and that element should be a string
// const myArray: [string] = ['hello', 'foo'] // error

const myArray2: string[] = ['Helo', 'World']

// allowing the array to be string or numbers
const myNewArray: (string | number)[] = ['Number', 2]


// Just another way of working with arrays

// this array cannot have anything iside it
const anotherArray: Array<never> = []
const yetAnother: Array<number | boolean> = [24, true]


// Objects

const myObject: {foo: string} = {foo: 'bar'}

const myInfo: {
    name: string,
    age: number,
    dogs: string[]
} = {
    name:'Sam',
    age: 26,
    dogs: ['Darcy', 'Charlie']
}


// We can create 'types'

type petInfoType = {
    name: string,
    age: number,
    cute: boolean,
    // optional properties
    img_url?: string
}

const pets: petInfoType[] = [
    {
        name: 'Charlie',
        age: 9,
        cute: true,
        img_url: 'wow!'
    }, {
        name: 'Darcy',
        age: 8,
        cute: true
    }
]


// functions 

function sum(a: number, b: number):number {
    return a + b
}

// sum('Connor', 'Sam') // error because I said the sum function accepts a number  

function createPhoneNumber(unicorn: number[]):string {
    return 'hi'
}


// Union types

type uniClasses = 'Art' | 'History' | 'Comp Sci'

// const myCourse: uniClasses = 'Bio' // error


type treeTypes = {
    treeType: 'fir' | 'oak' | 'willow' | 'cherry',
    evergreen: boolean,
    age: number,
    img_url?: string
}

const myArrayOfTrees: treeTypes[] = [
    {
        treeType: 'fir',
        evergreen: true,
        age: 2,
    }
]

console.log(myArrayOfTrees)