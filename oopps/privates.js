class MyPrivateClass {
    // private member
    #privateField = 0;

    constructor(){
        this.#privateField = 100;
    }

    // private method
    #mymessage(){
        console.log('I am private method');
    }

    printMessage(){
        this.#mymessage();
    }

    set PrivateField(v){
        this.#privateField = v;
    }
    get PrivateField(){
        return this.#privateField;
    }

    static message(){
        console.log("I am static");
    }
}

let o = new MyPrivateClass();
o.printMessage();
o.PrivateField =10000;
console.log(o.PrivateField);
MyPrivateClass.message();