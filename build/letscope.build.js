"use strict";

function display(x) {
  if (x == true) {
    var _y = 10;
    console.log('In if statement y = ' + _y);
  }

  var y = 0;
  console.log('Out of if statement y = ' + y); // dirty read

  y++; // dirty write

  console.log('Out of if statement with increatment y = ' + y);
}

display(true);
display(false);

for (var _i = 0; _i < 5; _i++) {
  console.log('in loop i = ' + _i);
}

var i = 0;
i++; // dirty write

console.log('out of loop i = ' + i);
