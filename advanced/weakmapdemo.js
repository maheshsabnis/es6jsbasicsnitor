let wm = new WeakMap();

// objects for keys

let d1 = {dno:10,dname:'IT'};
let d2 = {dno:20,dname:'HRT'};
let d3 = {dno:30,dname:'SL'};

wm.set(d1,[{eno:1,ename:'A', sal:100},{eno:2,ename:'B', sal:200}]);
wm.set(d2,[{eno:3,ename:'C', sal:100},{eno:4,ename:'D', sal:200}]);
wm.set(d3,[{eno:5,ename:'E', sal:100},{eno:6,ename:'F', sal:200}]);

console.log(`Record with d1 is = ${JSON.stringify(wm.get(d1))}`);

d1 = null; // overwrite the d1

// the key d1 with its values will be removed from WealMap

console.log(`Record with d1 is = ${JSON.stringify(wm.get(d1))}`);
d1 = {dno:40, dname:'TR'};
wm.set(d1,[{eno:7,ename:'G', sal:100},{eno:8,ename:'H', sal:200}]);
console.log(`Record with d1 is = ${JSON.stringify(wm.get(d1))}`);