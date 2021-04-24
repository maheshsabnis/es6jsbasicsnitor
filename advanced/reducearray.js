// simple reduce implementation
let numbers = [10,20,30,40,50,60];
let sum = 0;
numbers.forEach((n,i)=>{
    sum+=n;
});
console.log(sum);
// using reduce()
const reducer = (finalVal,currentVal)=> finalVal+currentVal;
// sum using reduce
// reduce() will point at 0th index as the final value
// the currfent value will be process based on logic with iteration overv the end-of array
console.log(`Sum using reduce function = ${numbers.reduce(reducer)}`);
// an internal object immutation
// numbers = [...numbers,90]
console.log(`Sum using reduce function by adding a new value in the original state of array= ${numbers.reduce(reducer,90)}`);

// finding out the frequency of elemnts in array

let names = ["Ajit", "Amit","Mahesh", "Ajit", "Mahesh", "Vikram", "Mahesh", "Parag", "Ajit", "Amit", "Mahesh"];

let frequency = names.reduce((srcNames, currentName)=>{
    // check the repeatation of currentName in srcNames, if found then 
    // increment counter
    if(currentName in srcNames){
        srcNames[currentName]++;
    }else {
        // set the counter for the name to 1
        srcNames[currentName] = 1;
    }
    //  return the modified state
    return srcNames;
},{}); // the second parameter is initialState for 'names'array

console.log(`Frequency = ${JSON.stringify(frequency)}`);

// using reduce() for grouping in source array based on condition

let employees = [
    {eno:1, ename:'A', dname:'d1'},
    {eno:2, ename:'B', dname:'d2'},
    {eno:3, ename:'C', dname:'d3'},
    {eno:4, ename:'D', dname:'d1'},
    {eno:5, ename:'E', dname:'d2'},
    {eno:6, ename:'F', dname:'d3'}
];

// create a group based on dname = d1
let empd1 = [];
employees.forEach((e,i)=>{
    if(e.dname === 'd1'){
        empd1.push(e);
    }
});

console.log(`emps od d1 = ${JSON.stringify(empd1)}`);
empd1 = undefined;


// print employees group by dname
// pname, the property for grouping
function printGroup(sourceArray, pname){
    // emp, the state of record to check
    // obj, is the iteration on sourceArray (each record from array)
    return sourceArray.reduce((emp,obj)=>{
        let key = obj[pname]; // the group property key
        // if no record then the group will be empty
        if(!emp[key]){
            emp[key]=[]; 
        }
        emp[key].push(obj); // add a record in group
        return emp; // modified state
    }, {});
};
let groups = printGroup(employees, 'dname');
console.log(`Group by records = ${JSON.stringify(groups)}`);








