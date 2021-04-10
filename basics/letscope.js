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