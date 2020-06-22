let pets = [
  {name: "Meowsalot", species: "cat", age: 2},
  {name: "Barksalot", species: "dog", age: 3},
  {name: "Purrsloud", species: "cat", age: 8}
];

// console.log(pets);
console.log(pets.push({ name: 'Puppster', species: 'dog', age: 1 }));

let ourTest = pets.map(nameOnly);

function nameOnly(pet) {
  return pet.name;
}

// console.log(ourTest);

let dogs = pets.filter(onlyDogs);

function onlyDogs(pet) {
  return pet.species === "dog";
}

function onlyBabies(pet) {
  return pet.age < 3;
}

let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly);

console.log(babyDogNames);