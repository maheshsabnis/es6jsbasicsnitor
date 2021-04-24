// internally uses Object.create() to add a new function in existing object
// writing an extension is optimized (fast) 
MyObject.prototype.reverse = function(str){
    let result;
    for(let i=str.length-1;i>=0;i--) {
        result += str[i];
    }
    return result;
};