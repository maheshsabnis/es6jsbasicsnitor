class DemoProps {
    constructor(){
        this.val= 0;
    }

    set V(v) {
        this.val = v;
    }
    get V(){
        return this.val;
    }
}

let op = new DemoProps();
op.V =100;
console.log(`V = ${op.V}`);