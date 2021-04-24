let obj1 = {name:'Ajay'};
console.log(`Name in obj1 = ${obj1.name}`);
let obj2 = obj1;
console.log(`Name in obj2 = ${obj2.name}`);

// overwrite the reference of obj1
obj1 = null; // browser has cleared all values and hence reference of obj1
console.log(`After Null`);
// the referenceedx value of obj1 is contained by obj2
console.log(`Name in obj2 = ${obj2.name}`); // name is reachable in reference

let obj3 = {name:'Mahesh'};
console.log(`obj3.name = ${obj3.name}`);
let arr = [obj3]; // string the object in array
obj3 = null; // overwrite the referenced value of obj3
console.log(`Value in arr = ${JSON.stringify(arr)}`); // value of obj3 is still exist in other object i.e. in arr
// the browser again rebirth the obj3
obj3 = {name:'Kumar'};
arr.push(obj3);
console.log(`Value in arr = ${JSON.stringify(arr)}`);


