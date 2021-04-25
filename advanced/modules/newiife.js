function f4(){
    arr.push([100,200,300,400]);
}
f4();
console.log(JSON.stringify(arr));
arr = []; // redeclration
console.log(JSON.stringify(arr));
