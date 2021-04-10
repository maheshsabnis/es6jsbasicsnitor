let names = ["Etahnn Hunt", "Indiana Jones", "Jason Bourn", "James Bond", "Jack Reacher", "Thor", "Ant Man","Captain America", "Iron Man", "Hulk"];

// using ES6 method to iterate
names.forEach((n,idx)=>{
    console.log(`Name at ${idx}the position is = ${n}`);
});
// return specific records from array
let res1=[];
for(let i=0;i<names.length;i++){
    if(names[i].length >=8){
        res1.push(names[i]);
    }
}
console.log(res1);
console.log();
// using filter() method to filter records from array
let res2 = names.filter((n,idx)=>{
     return n.length >=8;
});
console.log(res2);
// search for the first occurance of record from the array
// using find method
let res3 =  names.find(n=>n.startsWith('Ja'));
console.log(res3); 
let res4 =  names.find(n=>n.length > 6);
console.log(res4); 
console.log('using map()');
names.map((n,idx)=>{
    console.log(`Name at ${idx}the position is = ${n}`);
});