console.log(Math.round(5.9)); // 6 (nearest up integer, decimal is grear than 5)
console.log(Math.round(5.7)); // 6 (nearest up integer , decimal is grear than 5)
console.log(Math.round(5.3)); // 5 (nearest down integer , decimal is less than 5)
console.log(Math.round(5.1)); // 5 (nearest down integer , decimal is less than 5)
console.log(Math.round(-5.9)); // -6



console.log(Math.ceil(5.9)); // 6 (nearest up integer, decimal is grear than 5)
console.log(Math.ceil(5.7)); // 6 (nearest up integer , decimal is grear than 5)
console.log(Math.ceil(5.3)); // 6 (nearest up integer , decimal is less than 5)
console.log(Math.ceil(5.1)); // 6 (nearest up integer , decimal is less than 5)
console.log(Math.ceil(-5.9)); // -5



console.log(Math.floor(5.9)); // 6 (nearest down integer, decimal is grear than 5)
console.log(Math.floor(5.7)); // 6 (nearest down integer , decimal is grear than 5)
console.log(Math.floor(5.3)); // 6 (nearest down integer , decimal is less than 5)
console.log(Math.floor(5.1)); // 6 (nearest down integer , decimal is less than 5)
console.log(Math.floor(-5.9)); // -6


// using truncate ES 6


console.log(Math.trunc(5.9)); // 6 (nearest down integer, decimal is grear than 5)
console.log(Math.trunc(5.7)); // 6 (nearest down integer , decimal is grear than 5)
console.log(Math.trunc(5.3)); // 6 (nearest down integer , decimal is less than 5)
console.log(Math.trunc(5.1)); // 6 (nearest down integer , decimal is less than 5)
console.log(Math.trunc(-5.9)); // -5


console.log(`Abs of ${Math.abs(-4.3)}`);



console.log(`Min ${Math.min(1,4,2,-9,5,6,-10)}`);
console.log(`Max ${Math.max(1,4,2,-9,5,6,-10)}`);
console.log(`Power ${Math.pow(10,4)}`);



