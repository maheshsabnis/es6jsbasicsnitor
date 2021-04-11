// target object

let targetObject = {
    message: 'I ame the Terget Object',
    operation: function(x,y){
        return Math.pow(x,y);
    },
    _secretValue:'********'

};

// create a handler object
// the object that provides an accept of properies and methods of the target object
// configure the handler to protect some properties from the direct access using proxy
let handler = {
    // get property value
    get(target, prop){
        // ban the access of tthe property starts from _
        if(prop.startsWith('_')){
            throw new Error('Access is denied');
        } else {
            let value = target[prop]; // provide access of the property
            return value;
        }
    },
    // set the property value
    set(target, prop,value){
        // ban the access of tthe property starts from _
        if(prop.startsWith('_')){
            throw new Error('Access is denied');
        } else {
            target[prop] = value; // provide access of the property
            return true;
        }
    }
};

// lets define the proxy

let proxy =  new Proxy(targetObject, handler);



// creating the client function

function getInformation(){
   try {
    console.log(`Message = ${proxy.message}`);
    proxy.message = 'The new Message';
    console.log(`Updated Message = ${proxy.message}`);
    console.log(`Power 10 raised to 4 = ${proxy.operation(10,4)}`);
    console.log(proxy._secretValue);
   }catch(e){
     console.log(e.message);
   }
    
}

getInformation();