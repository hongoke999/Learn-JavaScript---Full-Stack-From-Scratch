/* 
  Scope is the biggest source of confusion regarding variables
  Context is the biggest source of confusion regarding objects 

  The 'this' keyword points towards the object that is executing the current function
*/
let john = {
  firstName: "John",
  lastName: "Doe",
  driveCar() {
    function imAFunctionNotAMethod() {
      console.log(this);
    }
    imAFunctionNotAMethod();
    console.log(this.firstName + " " + this.lastName + " is driving a car.");
  }
}

john.driveCar();

// Attaching independent function to an object to make it its method

function breath() {
  console.log(this.firstName + ' ' + this.lastName + ' just inhaled and exhaled.');
}

breath.call(john);
