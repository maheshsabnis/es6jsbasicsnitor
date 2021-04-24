// creating a dynamic funciton
// instructs the JS parset to parse the string as function body
let add = new Function('a','b', 'return a+b;');
console.log(`Add = ${add(100,300)}`);

// using Function() to create a Closure

function OuterFunction(){
    let outerVariable = 5; // local variable inn parent

 //  let InnerFunction = new Function('a', 'return Math.pow(a,a)');

 // innthe following case 'outerVariable' is just a variable 
 // let InnerFunction = new Function('outerVariable', 'return Math.pow(outerVariable,outerVariable)');

// outerVariable is the variable declared in Outer function ane hence the
// the Function() cannot access it because the FUnction can only access 
// formal parameters
 let InnerFunction = new Function(outerVariable, 'return Math.pow(outerVariable,outerVariable)'); // error



    console.log(`Using Function in Closure ${InnerFunction(outerVariable)}`);
    outerVariable = outerVariable + 9;  // modification of the outerVariable variable

    return InnerFunction; // return the closure from ourer function
}

let result = OuterFunction();
result();