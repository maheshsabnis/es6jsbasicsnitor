let valueSet = new Set();

valueSet.add(10);
valueSet.add(20);
valueSet.add(30);
valueSet.add(40);
valueSet.add(50);
valueSet.add("10");
valueSet.add("10");

console.log(`Length of valueSet = ${valueSet.size}`);
console.log();
console.log(valueSet.values());
console.log(`Is 60 available ${valueSet.has(60)}`);
console.log(`Is 10 available ${valueSet.has(10)}`);
console.log(`delete 50 ${valueSet.delete(50)}`);
console.log(`Is 50 available ${valueSet.has(50)}`);

let objectSet = new Set();
let o1 = {id:101,name:'A'};
let o2 = {id:102,name:'A'};
let o3 = {id:103,name:'A'};
let o4 = {id:104,name:'A'};
objectSet.add(o1);
objectSet.add(o2);
objectSet.add(o3);
objectSet.add(o4);
objectSet.add(o1); // duplicate object reference
console.log(`Value in set ${objectSet.values()} and size = ${objectSet.size}`);
let o5 = o1; // same object location with different reference
objectSet.add(o5);
console.log(`After using object Equality size = ${objectSet.size}`);
console.log(`Does o1 exists ${objectSet.has(o1)}`);
console.log(`Does o5 exists ${objectSet.has(o5)}`);
objectSet.delete(o5);
console.log(`Does o1 exists ${objectSet.has(o1)}`);
console.log(`Does o5 exists ${objectSet.has(o5)}`);

let valueObjects = new Set();
valueObjects.add({id:1,name:'A'}); // seperate object locations 
valueObjects.add({id:2,name:'A'}); // seperate object locations 
valueObjects.add({id:3,name:'A'}); // seperate object locations 
valueObjects.add({id:4,name:'A'}); // seperate object locations 
valueObjects.add({id:1,name:'A'}); // seperate object locations 
console.log(`Size of valueObjects = ${valueObjects.size}`);





