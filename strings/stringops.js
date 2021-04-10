let message = 'ES 6 is a new great standard for improvising productivity of JavaScript Programming';
// length
console.log(`Length of ${message} =  ${message.length}`);
// index of 'for' in string
console.log(`Index of "for" in ${message} = ${message.indexOf('for')} `);
// using ES 6 Seacrh method to locate postion of string
console.log(`Position of "for" in ${message} = ${message.search('for')} `); // es6 method
// get the slice of string based on postion
// slice can accept -ve values to seatch to left
console.log(`String from ${message} from 7th postion to end 15 characters ${message.slice(7,15)}`);
// subsstring() that cannot accept -ve values
console.log(`String from ${message} from 7th postion to end 15 characters ${message.substring(7,15)}`);
// replacing some characters from string
console.log(`in ${message} replece "productivity" by "maintinability" ${message.replace("productivity","maintinability")}`); // es6

// Classic JS methdos
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(`Trim ${'      Mahesh       '.trim()}`);

// positioning methods

let data = "I am new String";
console.log(` Character at 7th postion is = ${data.charAt(7)}`);
console.log(`Character code at 10th psotion is = ${data.charCodeAt(10)}`);

