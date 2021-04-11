// named class
class MyClass {
    // class must have a constructor for defining the public members
    // all public members from the constructor will be prefixed with 'this'
    constructor(v){
        this.str = v; // public string
    }
    // default access specifier for the class functions is public
    reverse(){
        let res = '';
        for(let i=this.str.length-1;i>=0;i--){
            res += this.str[i];
        }
        return res;
    }
}

// creating an instance of the class
let obj = new MyClass("ES6");
console.log(`Reverse of ES6 is = ${obj.reverse()}`);