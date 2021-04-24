let myval;
function myFunction(){
    let x = 100; // local variable
myval = 900; // the value set by the myfunction for global variable
    console.log(myval); // setting value for global variable
    return x*x;
}
let res1 = myFunction();
console.log(res1);

function AnotherFunction(){
    console.log(myval); // 900
}

AnotherFunction();