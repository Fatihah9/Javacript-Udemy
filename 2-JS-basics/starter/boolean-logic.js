var firstName = 'John';
var age = 35;

if (age < 13) {
  console.log(firstName + ' is a boy');

} else if (age >= 13 && age < 20) { // between 13 and 20
  console.log(firstName + ' is a teenager');

} else if (age >=20 && age < 30) {
  console.log(firstName + ' is a young adult');

} else {
  console.log(firstName + ' is an adult');
}

// Ternary Operator and Switch Statements

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch Statement

var job = 'teacher';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an Uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else');
}

// example :

age = 10;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy');
    break;

  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager');
    break;

  case age >=20 && age < 30:
    console.log(firstName + ' is a young adult');
    break;

  default:
    console.log(firstName + ' is an adult');
}

// Truthy and Falsy values
//Falsy values : undeifned, null, 0, '', NaN
// Truthy values : NOT falsy values

var height;

height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality Operators

if (height == '23') {
  console.log('The == operator does type coersion!');
}
