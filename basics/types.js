let n1; // no datatype because no initial value
console.log('value of n1 = ' + n1 + ' and data type of n1 = ' + typeof(n1)); // value and datatype is undefined 

n1 = 100;
console.log('value of n1 = ' + n1 + ' and data type of n1 = ' + typeof(n1));

n1 = "Mahesh";
console.log('value of n1 = ' + n1 + ' and data type of n1 = ' + typeof(n1));

n1 = 100.30;
console.log('value of n1 = ' + n1 + ' and data type of n1 = ' + typeof(n1));

n1 = true;
console.log('value of n1 = ' + n1 + ' and data type of n1 = ' + typeof(n1));

n1 = {id:101,name:'Mahesh'};
console.log('value of n1 = ' + n1 + ' and data type of n1 = ' + typeof(n1));

n1 = [100,20,20];
console.log('value of n1 = ' + n1 + ' and data type of n1 = ' + typeof(n1));

n1 = new Date(2021,3,10);
console.log('value of n1 = ' + n1 + ' and data type of n1 = ' + typeof(n1));

let n2 = "123Mahesh";
console.log('value of n2 = ' + n2 + ' and data type of n2 = ' + typeof(n2));
let n3 = parseInt(n2); // parse value of n2 from let to write for number
// untill the first character is not occured
console.log('value of n3 = ' + n3 + ' and data type of n3 = ' + typeof(n3));

console.log(5/2); // result =  2.5
console.log(parseInt(5/2)); // result = 2
console.log(parseFloat(5/2)); // result = 2.5

let a = 7;
let b = 8;
console.log((a/b));
console.log(parseInt(a/b));
console.log(parseFloat(a/b));





