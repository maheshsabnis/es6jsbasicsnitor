// reference functions
var MyObject = function(){
    // this, the scope object in JavaScript, it represents the containing object itself
    // in ES 3 and ES 5, 'this' is used to expose types (function, datamember, etc) from ref. function as 'public' types

    // the 'add' is public function
    this.add = function(x,y){
        return x + y;
    };
    // public data member
    this.data =[10,20,30,40,50];
};