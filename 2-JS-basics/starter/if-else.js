// If / else statement

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 74; // kg
var heightMark = 1.70;  // cm

var massJohn = 85;
var heightJohn = 1.80;

var markBMI = massMark / (heightMark * heightMark);
var johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
  console.log('Mark\'s BMI is higher than John\'s.');
} else {
  console.log('John\'s BMI is higher than Mark\'s');
}
