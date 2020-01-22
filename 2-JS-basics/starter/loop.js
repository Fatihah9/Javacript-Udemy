// for loop :

/* for (var i = 0; i < 10; i++) {
  console.log(i);
}


var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// While Loop :

var i = o;
while(i < john.length) {
  console.log(john[i]);
  i++;
} */

// continue and break Statements

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue; // result only shows element with ;string' type
  console.log(john[i]);
}


for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break; // stops the loop from printing
  console.log(john[i]);
}

// Looping backwards

for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
