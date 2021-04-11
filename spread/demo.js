function doWork(values){
    let sum = 0;
    if(values.length >0) {
        values.forEach((n,idx)=>{
            sum+=n;
        });
    }
    return sum;
}

console.log(`Add 2 ${doWork([1,2])}`);

console.log(`Add 3 ${doWork([1,2,3])}`);

// the same values will act as immutable object with varying paraeters
function doWorkSperad(...values){
    let sum = 0;
    if(values.length >0) {
        values.forEach((n,idx)=>{
            sum+=n;
        });
    }
    return sum;
}

console.log(`Add Spread 2 ${doWorkSperad(1,2)}`);

console.log(`Add 3 ${doWorkSperad(1,2,3)}`);

console.log();
console.log();

let arr = [10,20,30];
console.log(arr);
arr = [...arr, 40,50,60,70]; // arr will be speared with new values in it
console.log(arr);

