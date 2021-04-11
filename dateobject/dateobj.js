let dt = new Date(); // provide me the default current date as per the OS settings. The month will start from 1 (Jan)
console.log(`First Defaulrt ${dt}`);
dt = new Date("2021-03-10"); // setting the date March month (03)
console.log(` Explicit Settings ${dt}`);

dt = new Date("2021/04/11"); // Supported ISO format from ES 6+
console.log(`ISO ${dt}`);

dt = new Date("April 11 2021"); // Long Date  
console.log(`Long Date ${dt}`);

// teh Date Parse Values from String
dt = new Date("April 11, 2021");
console.log(`Parsed Date ${dt}`);

