let myFavoriteNumber = 7;
let myFavoriteNumbers = [9, 2, 8, 3, 7, 4];
let myWords = ["red", "orange", "yellow"];
let myPets = [{name: "Meowsalot", species: "cat"}, {name: "Barksalot", species: "dog"}];

myWords.push("green");
console.log(myWords);

// let myName = "Chaka";
// console.log(myName.toUpperCase());

// let myNumber = 7.89;
// console.log(myNumber.toFixed());

// myWords.shift()
// myWords.unshift("blue");

myWords.splice(0, 1);
console.log(myWords);

console.log(myFavoriteNumbers[3]);
console.log(myPets[1].species);