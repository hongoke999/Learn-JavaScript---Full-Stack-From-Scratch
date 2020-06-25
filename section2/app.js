//  FUNCTION HOISTING
cool();

function cool() {
  console.log('This is super cool');
}

// const cool = function() {
//   console.log('This is super cool');
// }

// console.log(strawberryCount);
let strawberryCount = 100;
console.log(strawberryCount);

// TEMPLATE LITERAL

let myName = 'Chaka';

console.log(`Hello, my name is ${myName} and the sky is blue.`);

// SEMICOLON
myName = 'Chaka'
console.log(`Hello, my name is ${myName} and the sky is blue.`)