// parameters
function calculator(a, b, operator) {
  if (operator === "*") return a * b;
  if (operator === "-") return a - b;
}

// argument
const myNumber = calculator(10, 5, "*");
const mySecondNumber = calculator(2, 5, "-");

console.log(myNumber, mySecondNumber);

function sum(a) {
  console.log(a);
}
sum(10);

// if () {}
// for () {}
// function() {}
// () => {}

// // invoking functions
// name()

// // invoking component
// <Name />

// function greetUser(obj) {
//   console.log(obj.name, obj.age, obj.games);
// }

// greetUser({
//   name: "Sam",
//   age: 26,
//   games: ["LoL", "CS2"],
//   pet: "Darcy",
//   foo: "bar",
// });

function greetUser({name, age, game, pet, foo}) {
    // game will be undefined because it has to match to the property name in the original object
  console.log(name, age, game, pet, foo);
}

greetUser({
  name: "Sam",
  age: 26,
  games: ["LoL", "CS2"],
  pet: "Darcy",
  foo: "bar",
});


greetUser({
    name: 'Darcy',
    age: 8,
    games: ['Fetch', 'Walk'],
    pet: 'Stuffed toy',
    foo: "bar"
})
