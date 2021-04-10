let names = ["Etahnn Hunt", "Indiana Jones", "Jason Bourn", "James Boid", "Jack Reacher"];

// Traditional JavaScript Iteration
// length is calculated explicitely 
for(let i=0;i<names.length;i++) {
    console.log(`Value at ${i}th position is = ${names[i]}`);
}

// ES 5 for..in lopp, simplification of teh for..loop
// index based itaretion based on implicit length
for(let i in names){
    console.log(`Value at ${i}th position is = ${names[i]}`);
}
// ES 6 for..of loop
// iterate over each record in array and return (or yield)
// the record from the array 
// read n then move next()
for(let n of names){
    console.log(`Names = ${n}`);
}

names.push('Rabert Langdon'); // add element at the right-most positon in the array
for(let n of names){
    console.log(`Names = ${n}`);
}
names.pop(); // remove the element at the right-most positon in the array
for(let n of names){
    console.log(`Names = ${n}`);
}
console.log();
names.unshift('Captain America'); // add an element at the left most position
for(let n of names){
    console.log(`Names = ${n}`);
}
console.log();
names.shift(); // remove an element at the left most position
for(let n of names){
    console.log(`Names = ${n}`);
}

console.log();
// check if an element is present in the array
console.log(names.indexOf('Jack Reacher')); // result is -1 is record not found, else will return the index of the element
names.push("Captain America");
names.push("Thor");
names.push("Iron Man");
names.push("Thor");
console.log();
for(let n of names){
    console.log(`Names = ${n}`);
}
// check the last index of the Thor
console.log(names.lastIndexOf('Thor'));