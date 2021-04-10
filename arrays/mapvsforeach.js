let myarray = [1,2,3,4,5,6,7,8,9];

let res1 = myarray.forEach((n,i)=>{
    let x =  n*2; // no return is allowed from  forEach
    console.log(x);
});

console.log(`myarray = ${myarray}`); // original array will remain unchange
console.log(`Return from myarr = ${res1}`); // undefined because the forEach() does not return anything

res1 = myarray.map((n,i)=>{
    return n*2;
});
console.log(`With map myarray = ${myarray}`);
console.log(`Return from myarr = ${res1} ${typeof(res1)}`);
