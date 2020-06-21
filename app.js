/* 
    The higher-order function is a function that either:
    a. Accepts a function as an argument
    b. Returns a function
*/

//  1. Example of function that accepts a function as an argument
/* document.addEventListener("click", ourAmazingFunction);

function ourAmazingFunction() {
    alert("Thank you for clicking");
} */

//  Repetitive functions
/* function doubleMe (x) {
    return x * 2;
}

function tripleMe(x) {
  return x * 3;
}

function quadrupleMe(x) {
  return x * 4;
} */

//  2.  Create an example function that returns a function
/* function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

let doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

document.write(quadrupleMe(20)); */

//  3. Useful higher-order functions that are part of the language itself (and not just web browser jargon).

let myColors = ['red', 'orange', 'yellow', 'green'];

myColors.forEach(saySomethingNice);

// myColors.map();
// myColors.filter();

function saySomethingNice(myColor) {
    document.write("The color " + myColor + " is a great color.<br>");
}