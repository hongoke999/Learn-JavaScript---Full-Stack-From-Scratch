/* 
  Scope is the biggest source of confusion regarding variables
  Context is the biggest source of confusion regarding objects 
*/
let myName = 'Chaka';

function amazingFunction() {
  // let myName = 'Jino moja mswaki wa nini!!!';
  if(2 + 2 === 4) {
    myName = 'Vlad the impaler';
    console.log("inside the if statement", myName);
  }
  // console.log("inside our function", myName);
}

amazingFunction();
console.log("in the global scope", myName)
