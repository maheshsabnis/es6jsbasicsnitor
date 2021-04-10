let a = 10;
console.log('a = ' + a);
let b = a; // assign value of a to b
console.log('after assigning a to b, b = ' + b + ' and a =  ' + a);
b = 100;
console.log('after modifying b to 100 , b = ' + b + ' and a =  ' + a);

let obj1 = {x:10}; // the object declaration aka JSON object aka the Object Literal, x is literal

console.log('obj1.x = ' + obj1.x);

let obj2 = obj1; // assigning obj1 to obj2, both obj1 and obj2 will point to same location
console.log('obj2.x = ' + obj2.x + "  and obj1.x = " + obj1.x);

obj2.x = 1000; // modifying obj2, since obj1 and obj2 points gto same location, if one change other will also be changed 
console.log('After modification  obj2.x = '+ obj2.x + '  and  obj1.x = ' + obj1.x);

// using Object methods from ES 5 onwards
// create a new object by copying the original object into the new blank object
// parameter 1: the target object that will bew newly created
// parameter 2: the source objectb of which schema and values will be copied into the terget object
let obj3 = Object.assign({}, obj2);
console.log('obj3.x = ' + obj3.x + '  and obj2.x = ' + obj2.x);
obj3.x=  2000;
console.log('after modification in obj3.x the obj3.x = ' + obj3.x + '  and obj2.x = ' + obj2.x);



