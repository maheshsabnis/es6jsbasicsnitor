// The 'Module' that is stiring the reference of IIFE will now act as a 
// JavaScript Module Patern using IIFE

let Module = (function(){
    // inner function as closure

    let validate = function(input){
        if(input.length === 0 || input === undefined) {
            return false;
        } else {
            return true;
        }
    }
    // publically accessible functions
    return {
        getLength:function(str){
            if(!validate(str)) return 0;
            return str.length;
        },
        reverseArray:function(arr){
            if(!validate(arr)) return 0;
            return arr.reverse();
        }
    };
})();