function Rectangle(x,y) {
    this._length  =x;
    this._breadth = y;
}

// defining a prototype
// create a new instace of Rectangle using Object.create() and then the
// new function is added as prototype in existing function
// so prototype is slower as compare to ref. function
Rectangle.prototype.getArea = function(){
    // the object literal
    return {
        area : this._length * this._breadth 
    };
}