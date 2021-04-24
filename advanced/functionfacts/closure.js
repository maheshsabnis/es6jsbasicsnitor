function OuterFunction(){
    let outerVariable = 500; // local variable inn parent

    function InnerFunction(){
        outerVariable = outerVariable + 600;
        console.log(`Inside the InnerFuntion value = ${outerVariable}`);
    }

    outerVariable = outerVariable + 900;  // modification of the outerVariable variable

    return InnerFunction; // return the closure from ourer function
}

let result = OuterFunction();
result();