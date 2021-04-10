# ES 6 Programming

- New Standard for Front-End Code 
- New Standard for JS Full Stack Apps
- The ES 6 is Productive way of writing the JavaScript Code
- 3 Languages based on ES 6
    - TypeScript
        - Language by Microsoft, based on C# (Same Team)
        - Used for Angular Development
        - Used for
            - Angular Apps, React Apps, Vue Apps 
    - Modern JavaScript aka High-Level JavaScript or ES 6         
        - Represented using ES 2015 library
        - USed by React, Vue, Ember, ExtJs mostly
    - dart
        - Language by Google    
- ESx i.e. versions
    - ES 6 -- ES 2015
        - Foundation of Modern JS
    - ES 7 -- ES 2016
        - Async Programming with Server-Side Standards
            - async/await 
    - ES 8 -- ES 2017
    - ES 9 -- ES 2018
    - ES 10 (Current) -- ES 2019
    - ES next -- ES 2020        
- Foundation is ES 6 with following features
    - Declaration Scopes for variables
    - Template String
    - Arrow Operator
    - rest parameters
    - Enhanced Methods for Array and String 
    - New Data Structures
    - New Methods or objects for AJAX calls
        - Promises
    - Supports for OOPs
        - Class
        - Instance
        - Inheritence
        - public declarations
    - Modules
    - Proxies        

- Transpilers
    - A Program that transfors the ES 6 code into Browser Compatible JavaScript Code
    - Babel 

# Creating ES 6 App

- Create a folder and open the folder in VSCode
- Open the Node.js Command Prompt (WIndows Command Prompt or Terminal Window in Linux or Mac) 
- Runt the Following command for Configuration of the Project
    - Run the command , npm init -y
        - TO create package.json file, the configuration file for the application
        - Important Sections from the package.json
            - 'scripts', the section that contains commands for the application as follows
                - 'start', start executing the application
                    - npm run start, will execute the file and start executing the application OR 'npm start'
                - 'build', buid the app
                    - npm run buid OR npm build
                - 'test', test the app
                    - npm run test or npm test
            - keywords:[]
                - an array contains list of words based on which the package will be searched on
                    - github
                    - Node Package Manager repository i.e. https://www.npmjs.com
            - dependencies:{}
                - the section that contains app dependency packagesn those are needed to run the package 
                - Use the folllowing command to install runtime depednency packages 
                    - npm install --save <PACKAGE-NAME>
                        - e.g. npm install --save @babel/core      
            - devDependencies:{}
                - the section that contains app depednency packages used only during the development of the application
                - use the fllowing command to install dev dependencies packages
                    - npm install --save-dev  <PACKAGE-NAME>
                        - e.g. npm insall --save-dev @babel/core
- important packages for ES 6 aka High Level JavaScript
    - @babel/core
        - The core transpiler library that contains all transpilation settings
    - @babel/cli
        - The COmmand line interface that will be used to transpile ES6 to ES 5/ ES 3
    - @babel/polyfill
        - The packae that will be sued by babel-core during the transpilation of some array/ string methods
    - @babel/preset-env
        - package that will be used to set the current projects' transpilation from ES 6 to ES 5
    - babel-preset-es2015
        - package for ES 6 library set that will use al ES 6 syntaxes for the transpilation e.g. arrao-opwrator, template string, etc
    - @babel/preset-stage-0 (optional)
        - The ES 5 code generator for optimization                                              
    - @babel/plugin-transform-module-commonjs
        - ES 6 module transpilation
- Install babel-core and babel-cli in a global scope so that they will be used across all ES 6 modules on thet machine
    - npm install -g @babel/core @babel/cli, on windows machine
    - sudo install -g @babel/core @babel/cli on linux and Mac       
   - npm install --save-dev @babel/cli @babel/core @babel/polyfill @babel/preset-env @babel/preset-stage-0 babel-preset-es2015@6.24.1 
    

# ES 6 Programming


- To run the JavaSCript file on terminal window or command window use the following command
    - node <File-Name>.js
- the ES 6 code always generate ES 6 linting warining, so in the project add '.babelrc' file, the babel resource-configuration file and configure the BAbel ES 6 linting confoguration as follows

```javascript
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

and also add the .jshintrc file for ES 6 JavaScript Wanring deprication

```javascript
{
    "esversion": 6
}
```

- the Transpilation command

babel <SOURCE-ES6-FILE>.js -o <TARGET-FILE>.js


1. The Block Scope declaration using 'let' keyword
    - the 'var' in javascript is 'function level' or 'file level'
    - the 'let' keyword is used to provide the 'block-scope' declaration, the declared variable will be live and accessible only withing the declaring block
```javascript
function display(x){
    if(x == true) {
        let y = 10;
        console.log('In if statement y = ' + y);
    }
    let y = 0;
    console.log('Out of if statement y = ' + y); // dirty read
    y++; // dirty write
    console.log('Out of if statement with increatment y = ' + y);
}

display(true);
display(false);

for(let i=0;i<5;i++){
    console.log('in loop i = ' + i);
}
let i = 0;
i++; // dirty write
console.log('out of loop i = ' + i);
```   
2. Type System
    - No data types in JavaScript and hence in ES 6
    - But, there are 'Parsed-Type'(?) available
    - Parsed-Types is a paring of declaration from left-to-right to decide the type of data stored in variable
        - number
        - string
        - boolean
        - object
            - date
            - array
            - {} aka object
            - function
        - object is the high-level type in JavaScript, it differs its behavior based on the initial value assigned to object(?)
``` javascript
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

```

- string improvements
    - the new string concatination syntax with 'interpolartion'(?)
        - Interpolation is a process of creating a single string object by parsing the variable expressions in it
        - syntax
            - `The value = ${expre1} is new in string ${expre2}`;
                - the single string will be build e.g. is expre1 is Mahesh and expre2 is Sabnis then string will be
                    - The value Mahesh is new in string Sabnis, 
                        - a single string object
``` javascript
let fname = "Tejas";
let mname = "Mahesh";
let lname = "Sabnis";

let fullnameOlder = 'The full name is = ' + fname + ' ' + mname + '  ' + lname;
console.log(fullnameOlder);

let fullnameEs6 = `The full name is = ${fname} ${mname} ${lname}`;
console.log(fullnameEs6);
```

- Using ES 6 Objects
    - Iterators using for..of loop
        - New loop for reading data from collection
    - Array object
        - ES 6 Modern Methods
            - foEach()
            - map()
            - filter()
            - find()
            - sort()
            - reverse()
        - forEach() returns a modified record from array w/o changing the array whereas map() can directly change the whole array itself and return it 
    - Collections (in High-Level-JavaScript)
        - Set()
        - Map()
``` javascript
// Simple Array

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
```        

``` javascript
// array with classis methods
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


```

``` javascript
// es6 methods
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
```

``` javascript
// map vs foreach

let myarray = [1,2,3,4,5,6,7,8,9];

let res1 = myarray.forEach((n,i)=>{
    let x =  n*2; // no return is allowed from  forEach
    console.log(x);
});

console.log(`myarray = ${myarray}`); // original array will remain unchange
console.log(`Return from myarr = ${res1}`); // undefined because the forEach() does not return anything

res1 = myarray.map((n,i)=>{
    return n*2;
});
console.log(`With map myarray = ${myarray}`);
console.log(`Return from myarr = ${res1} ${typeof(res1)}`);


```

``` javascript
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


```


# Hands-on-Labs

1. Create a complex array of employees with atleast 20 records and perform follwing operations on it
    - List all employees for specific department
    - List sum of salaries of each department
    - List employee having max salary for each department
    - List all employees in reverse order by EmpName
    - List all employees by calculating TDS for each employee as 10% for salary range from 0 to 10K, 20% fro 10.1K to 20K else 30% of sal
2. Take the followign string 
 - The James Bond series focuses on a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. Since Fleming's death in 1964, eight other authors have written authorised Bond novels or novelisations: Kingsley Amis, Christopher Wood, John Gardner, Raymond Benson, Sebastian Faulks, Jeffery Deaver, William Boyd and Anthony Horowitz. The latest novel is Forever and a Day by Anthony Horowitz, published in May 2018. Additionally Charlie Higson wrote a series on a young James Bond, and Kate Westbrook wrote three novels based on the diaries of a recurring series character, Moneypenny.

The character—also known by the code number 007 (pronounced "double-O-seven")—has also been adapted for television, radio, comic strip, video games and film. The films are the longest continually running film series of all time and have grossed over US$7.04 billion in total, making it the sixth-highest-grossing film series to date, which started in 1962 with Dr. No, starring Sean Connery as Bond. As of 2021, there have been twenty-four films in the Eon Productions series. The most recent Bond film, Spectre (2015), stars Daniel Craig in his fourth portrayal of Bond; he is the sixth actor to play Bond in the Eon series. There have also been two independent productions of Bond films: Casino Royale (a 1967 spoof starring David Niven) and Never Say Never Again (a 1983 remake of an earlier Eon-produced film, 1965's Thunderball, both starring Connery). In 2015 the series was estimated to be worth $19.9 billion,[1] making James Bond one of the highest-grossing media franchises of all time.

- perform following operations on this tring
    - Find out total number of vowels and thier indexex from the string e.g. serach a,e,i,o,u 
        - NOTE: Provide the best design 
            - create an array of vowels and comare ot will string
    - FInd out number of statements in the string
    - Convert the string in Title cawse (means first character of each word inupper case)
    - FInd number of times a specific word occures in string
- Convert the number 
    - 2039643 in string format (optional)
        -  Twenty Lacs Thirty Nine Thousand Six Hundred Fourty Three          