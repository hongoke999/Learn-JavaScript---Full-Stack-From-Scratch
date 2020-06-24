//  Anonymous Function
document.addEventListener('click', function(){
  alert('Thank you for clicking!!');
});

//  Arrow functions - neat
document.addEventListener('click', () => {
  alert('Thank you for clicking!!');
});

// Neater
document.addEventListener('click', () => alert('Thank you for clicking!!'));


let myNumbers = [10, 500, 2000];
let doubledNumbers = myNumbers.map(number => number * 2);
console.log(doubledNumbers);

let john = {
  firstName: 'John',
  lastName: 'Doe',
  driveCar() {
    imAFunctionNotAMethod = () => console.log(this);
    imAFunctionNotAMethod();
    console.log(this.firstName + ' ' + this.lastName + ' is driving a car.');
  }
}

john.driveCar();