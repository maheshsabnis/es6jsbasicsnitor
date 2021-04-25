// implement an infrastructure for overloading
// object, the name of the object that contains overloaded methods
// name, the name of the function used as overloaded function
// fn the function object thatbw will be executed as logic for overloaded 'name' parameter
function findOverloadedMethod(object, name, fn){
  if(!object._overload) {
      object._overload = {}; // support overloading
  }

  if(!object._overload[name]) {
    object._overload[name] = {}; // uses the function name for overloading
  }
// fn.length will be all same name methods in target objects 
  if(!object._overload[name][fn.length]) {
    object._overload[name][fn.length] = fn;  // use the function name for ovreloaded execution with different parameters
  }

  // apply the function invokation pattern for executing the overloaded function
  object[name]= function(){
      if(this._overload[name][arguments.length]){
          return this._overload[name][arguments.length].apply(this,arguments);
      }
  }
}

function Students (){
    let students = [
        {StudentId:1, Name: 'Ajay', Year:'First', Status:'Passed'},
        {StudentId:2, Name: 'Bjay', Year:'Second', Status:'Failed'},
        {StudentId:3, Name: 'Cjay', Year:'First', Status:'Promoted'},
        {StudentId:4, Name: 'Djay', Year:'Second', Status:'Passed'},
        {StudentId:5, Name: 'Ejay', Year:'First', Status:'Failed'},
        {StudentId:6, Name: 'Fjay', Year:'Second', Status:'Promoted'},
        {StudentId:7, Name: 'Gjay', Year:'First', Status:'Passed'},
        {StudentId:8, Name: 'Hjay', Year:'Second', Status:'Failed'},
        {StudentId:9, Name: 'Ijay', Year:'First', Status:'Promoted'}

    ];

    // write functions to find students based on
    // all students find()
    findOverloadedMethod(this, "find", function(){
        return students;
    });
    // students based on condition
    // find(Status)
    findOverloadedMethod(this, "find", function(status){
        let result = students.filter((s,i)=>{
            return s.Status === status;
        });
        return result;
    });
}

let obj1 = new Students();
console.log(`All Students ${JSON.stringify(obj1.find())}`);
console.log();
console.log(`All Passed Students ${JSON.stringify(obj1.find("Passed"))}`);
console.log();
console.log(`All Failed Students ${JSON.stringify(obj1.find("Failed"))}`);
console.log();
console.log(`All Promoted Students ${JSON.stringify(obj1.find("Promoted"))}`);