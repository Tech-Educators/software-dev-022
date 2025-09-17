import cowsay from "cowsay"
import chalk from "chalk"
// to get the above method to work, make sure to include "type": "module" in your package.json file.


// the below method of importing packes is a bit outdated. This is commonjs import. We will use es6 imports on the rest of the course


// const cowsay = require("cowsay");
// saying give me the cowsay function from the package

console.log('hello!')

// we can run our code by typing 'node filename.js' 

// npx cowsay [message] - execute the cowsay package!

console.log(cowsay)
/*
{
  say: [Function (anonymous)],
  think: [Function (anonymous)],
  list: [Function (anonymous)]
}
*/


const output = cowsay.say({
    e: 'o0',
    T: '?',
    text: 'I love cowsay'
})


console.log(output)