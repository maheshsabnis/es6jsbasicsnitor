// ES 7 feature

// step 1: Defining the Generator function
// start reading data in sequence  from 0 to to 100
// with step increament as 1
// defualt values for iterations
// the '*' will provide following property to generator
// the 'value' property, will be used to define the current value
// the 'done' property, will represent the end of the sequence
// the 'next()' method, will be used to increament to next record
function* simpleGenerator(start=0, end=100, step=2){
    let count=0;
    for(let i=start;i<=end;i+=2){
        count++;
        yield i; // read current value of i and return it
    }
    return count; // the current number in sequence
};

const mygenerator = simpleGenerator(1,10,2); 
let res = mygenerator.next(); // initializing
while(!res.done){
    console.log(`Value from Sequence is =  ${res.value}`);
    res = mygenerator.next();  // move to next
}
