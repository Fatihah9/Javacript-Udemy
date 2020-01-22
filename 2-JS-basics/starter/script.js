/*
var firstName = 'Nurul';
console.log(firstName);

var lastName = 'Azmi';
var age = 25;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'CRM';
console.log(job);

// Variable naming rule
var _3years = 3; //variable cannot start with number
var johnMark = 'John and Mark'; //correct variable
var if = 23; //error result due to 'if' is a JavaScript formula


 //Combining variables to the console (type Coersion):

 var firstName = 'Nurul';
 var age = 25;

 //Type Coersion

 console.log(firstName + ' ' + age);

var job, isMarried;
job = 'CRM';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job +'. Is she married? ' + isMarried);

// Variable Mutation - changing the value of a variable. eg - age as below
age = 'twenty five';
job = 'teacher';

alert(firstName + ' is a ' + age + ' year old ' + job +'. Is she married? ' + isMarried);

var lastName = prompt('What is her last name?');
console.log(firstName + ' ' + lastName);
*/

//Basic Operators

var year, yearJohn, yearMark;
now = 2019;
ageJohn = 25;
ageMark = 28;

// Math operators
yearNurul = now - ageJohn;
yearKonrad = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof Operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');

var x;
console.log(typeof x);


// operator precedence (which operators execute first)

var now =  2019;
var yearJohn = 1994;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignment

var x, y;
 x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y);

 // More Operators
 x *= 2; // <-- you can type this instead of x = x * 2
 console.log(x);
 x += 10;
 console.log(x); // this answers 62
 x++ // can be written instead of x+=1; or x = x + 1
 console.log(x);
