
// arrayn of Objects
let emps = [
    {EmpNo:101,EmpName:'A',Salary:1100},
    {EmpNo:102,EmpName:'B',Salary:1200},
    {EmpNo:103,EmpName:'C',Salary:1300},
    {EmpNo:104,EmpName:'D',Salary:1400}
];

emps.forEach((e,i)=>{
    if(e.Salary > 1300){
    console.log(JSON.stringify(e));
}
});