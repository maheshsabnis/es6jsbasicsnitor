function CounterObject(){
    let counter = 100; //local variable
    // netsed function aka inner function
    function increment(){
        let v = ++counter; 
        console.log(`in Ineer function v = ${v}`);
        return  v;// increement with return
    }
    counter =  increment(); // accessing the ineer function
    return counter; // returniong value of the counter
}

console.log(`First invocation ${CounterObject()}`); // 101
console.log(`Second invocation ${CounterObject()}`); // 101
console.log(`Third invocation ${CounterObject()}`); // 101