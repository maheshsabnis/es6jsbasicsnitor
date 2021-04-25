// source object
// 'this' is a scope defined for the employee object
// whenever the getFullName() is called on a target object using apply() method the scope of ye targte object will be accessible  to 'employee' object using 'this'  
let emp = {
    getFullName:function(address,city){
        if(address === undefined && city === undefined){
            return `First Name ${this.firstName} Middle Name ${this.middleName} Last Name ${this.lastName}`;
        }
        return `First Name ${this.firstName} Middle Name ${this.middleName} Last Name ${this.lastName} Address ${address} City ${city}`;
    }
};


// target object
let emp3= {
    firstName:'Mahesh',
    middleName: 'Rameshrao',
    lastName:'Sabnis'
};

let emp4= {
    firstName:'Tejas',
    middleName: 'Mahesh',
    lastName:'Sabnis'
};

// using the call() to link the getFulleName() function on emp1 target object
// the 'getFullName()' function on the 'employee' source object is using 'call()' function to access scope properties of 'emp1' target object
console.log(`Full Name = ${emp.getFullName.apply(emp3)}`);

console.log(`Full Name = ${emp.getFullName.apply(emp4)}`);

// the source object method is accepting parameters then use the array containg list of parameters as a second argument to apply() method

console.log(`Full Name = ${emp.getFullName.apply(emp3,["Bavdhan", "Pune"])}`);

console.log(`Full Name = ${emp.getFullName.apply(emp4,["Bavdhan", "Pune"])}`);