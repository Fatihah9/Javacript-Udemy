  function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
  console.log(firstName + ' retires in ' + retirement + ' years');
} else {
  console.log(firstName + ' is already retired');
}
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

// Function Expressions

var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids to code';
    case 'driver':
      return firstName + ' drives a cab in Lisbon';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));




/* let userArray = ["Jan", "Ania", "Zbyszek", "Kasia"];
let skills = ["JavaScript", "Python", "NodeJS", "Java"];

console.log ( "Users");
for (let i = 1; i <userArray.length; i ++) {
  console.log (userArray [i]);
}

console.log ( "skills");
for (let i = 1; i <skills.length; i ++) {
  console.log (skills [i]);
}

function printArrayValues(array){
  for(let i=1; i<array.length; i++){
    console.log(array[i]);
  }
}

let userArray = ["Jan","Ania","Zbyszek","Kasia"];
let skills = ["JavaScript","Python","NodeJS","Java"];

console.log("Users:");
//wywołujemy funkcję do wyświetlenia
printArrayValues(userArray);

console.log("Skills");
//wywołujemy funkcję do wyświetlenia
printArrayValues(skills);

function printArrayValues ​​(array) {
  for (let i = 1; i <array.length; i ++) {
    console.log (array [i]);
  }
} */

function getNumber(number, array) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true;
        }
    }
    return false;
}

let num1 = 3;
let arr1 = [1,2,4];

console.log(getNumber(num1, arr1));
