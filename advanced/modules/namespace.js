let namespace = {
    value:100
};

// this is si scope for the object literal aka namespace
namespace.fn1 = function(x,y){
    return Math.pow(x,y) + this.value;
}

namespace.fn2 = function(str){
    return str.toUpperCase();
}
