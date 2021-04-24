let MyObject = function(){
    // public declaration
    // this is the scope declaration
    this.changeCase = function(str,c){
        if(c === "U" || c === "u") return str.toUpperCase();
        if(c === "L" || c === "l") return str.toLowerCase();
        return str;
    };
}