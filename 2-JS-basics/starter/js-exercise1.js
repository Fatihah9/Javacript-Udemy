var massMark = 74; // kg
var heightMark = 1.70;  // cm

var massJohn = 85;
var heightJohn = 1.80;

var markBMI = massMark / (heightMark * heightMark);
var johnBMI = massJohn / (heightJohn * heightJohn);

console.log(markBMI, johnBMI);

var markHigherBMI = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
