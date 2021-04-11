class AbsctratClass {

    // define a constructor
    constructor(){
        // if the Abstract class is tried to be instantiated then
        // generate error
        if(new.target === AbsctratClass) {
            throw new TypeError("Cannot creae an instance of the AbstractClass");
        }
    }

    baseclassMethod(){
        console.log('The Base class method');
    }
}
// use 'extends' keyword for inheritence
// if the derive class wants to access base class
// constructor then use 'super()' method class
// othwerwise the ES 6 will generate syntax error
class DerivedClass extends AbsctratClass {
    constructor(){
        super();
    }
    printMessage(){
        console.log('Derived class method');
    }
}
// the 'new' keyword
// used to create an instance of the class
let objD = new DerivedClass();
 
objD.baseclassMethod();
objD.printMessage();
let objB = new AbsctratClass();
objB.baseclassMethod();
// typecasting is now allowed
// ((DerivedClass)objB).printMessage(); // error