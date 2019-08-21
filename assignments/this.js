/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding applies when no other rules do and you are not in strict mode which will return undefined while preventing us from breaking code
* 2. Implicit binding is the most common and it means that when a function is invoked whatever is to the left of the dot is what this refers to
* 3. Explicit binding means we can tell the JS engine to point to a certain value using call, apply, or bind
* 4. NEW binding uses the new keyword to construct a new object which this points to
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

'use strict';

function car(){
    //   console.log(this.make);
}

const make = 'Dodge';
console.log(car());

// Principle 2

// code example for Implicit Binding

let myCar = {
  make: 'Dodge',
  model: 'Ram',
  car: function(){
    console.log(this.model);
  }
}

myCar.car(); // we are invoking the function here

// Principle 3

// code example for New Binding


function Car(best){
  this.favorite = best; // 'thing' can be any word
}

let myFavCar = new Car('Cadillac');

console.log(`My favorite car is a ${myFavCar.favorite}`);

// Principle 4

// code example for Explicit Binding

function newcar(){
  console.log(this.newModel);
}

let myNewCar = {
  newMake: 'Chevy',
  newModel: 'Silverado'
}

newcar.call(myNewCar); // invoking the function here