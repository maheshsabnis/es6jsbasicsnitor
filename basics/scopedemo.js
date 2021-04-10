var p;
function display(x){
    if(x == true) {
        var y = 10;
        console.log('In if statement y = ' + y);
    }
    console.log('Out of if statement y = ' + y); // dirty read
    y++; // dirty write
    console.log('Out of if statement with increatment y = ' + y);
}

display(true);
display(false);

for(var i=0;i<5;i++){
    console.log('in loop i = ' + i);
}
i++; // dirty write
console.log('out of loop i = ' + i);