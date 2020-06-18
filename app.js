/* let catName = "Fluffy";
let catAge = 4;

function meow() {
  alert("Meowwwwwwwwww");
}

meow(); */

let cat = {
  name: "Fluffy",
  age: 4,
  foods: {
    favorite: "Tuna",
    leastFavorite: "Oranges"
  },
  eyeColor: "blue",
  meow() {
    alert("Meowwwwwwwwwwww");
  }
}

// alert(cat.name);
// cat.meow();
// alert(cat.foods.favorite);

document.addEventListener('click', myAmazingFunction);

function myAmazingFunction() {
  alert("Hello there!");
}