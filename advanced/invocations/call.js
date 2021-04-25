// source object
// 'this' is a scope defined for the employee object
// whenever the getFullName() is called on a target object using call() method the scope of ye targte object will be accessible  to 'employee' object using 'this'  
let employee = {
    getFullName:function(address,city){
        return `First Name ${this.firstName} Middle Name ${this.middleName} Last Name ${this.lastName} Address ${address} City ${city}`;
    }
};


// target object
let emp1= {
    firstName:'Mahesh',
    middleName: 'Rameshrao',
    lastName:'Sabnis'
};

let emp2= {
    firstName:'Tejas',
    middleName: 'Mahesh',
    lastName:'Sabnis'
};

// using the call() to link the getFulleName() function on emp1 target object
// the 'getFullName()' function on the 'employee' source object is using 'call()' function to access scope properties of 'emp1' target object
console.log(`Full Name = ${employee.getFullName.call(emp1)}`);

console.log(`Full Name = ${employee.getFullName.call(emp2)}`);


// the source object method is accepting parameters then use comman separated list of parameters as a second argument to call() metho
console.log(`Full Name = ${employee.getFullName.call(emp1,"Bavdhan", "Pune")}`);

console.log(`Full Name = ${employee.getFullName.call(emp2,"Bavdhan", "Pune")}`);