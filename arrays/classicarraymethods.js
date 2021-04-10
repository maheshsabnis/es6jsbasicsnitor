let names = ["Etahnn Hunt", "Indiana Jones", "Jason Bourn", "James Bond", "Jack Reacher"];

// remove some elements from array
let res = names.splice(1,3); // remove 3 elements from the 1st index
console.log(res);
console.log(names);
// concatinate arrays into a single array
let newHeros = ["Thor", "Iron Man", "Captain America"];
names = names.concat(newHeros);
console.log(names);
// sort
// default by alpgabetic order
console.log(names.sort());
console.log(names.reverse()); // ES 6 method
// sort by length
function sortNamesLength(n1,n2){
     return n1.length - n2.length ;
}
console.log();
let sortByLength = names.sort(sortNamesLength);
console.log(sortByLength);
console.log();
// using Callback as in class JavaScript
let sortRes = names.sort(function(a,b){
    return b.length - a.length;
});
console.log(sortRes);

// In ES 6, if the function accepts callbak function as input parameter, then the callback function can be replaced by the 'Arrow Operator'

console.log(`Sort by Name length in array ${names.sort((a,b)=> {return a.length - b.length;})}`);
