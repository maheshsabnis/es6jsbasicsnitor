// 1. All declarartions are bound to the scope 
// 2. Easy when we intend to create cohisive functionalities 
(function(){
    let arr=[];

    function f1(){
        arr.push(10);
    }
    
    f1();
    console.log(`f1 ${JSON.stringify(arr)}`);
    
    function f2(){
        arr.push(20);
        arr.push(30);
        arr.push(40);
    }
    f2()
    console.log(`f2 ${JSON.stringify(arr)}`);
    function f3(){
        arr.push([50,60,70,80]);
    }
    f3();
    console.log(`f3 ${JSON.stringify(arr)}`);
})();
