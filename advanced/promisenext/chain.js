function promiseChain(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(1), 1000); // return 1 after 1 second
    }).then((res1)=>{
        alert(`First Result is = ${res1}`);
        return res1*2; // continue execution with next promise in chain
    }).then((res2)=>{
        alert(`Second Result is = ${res2}`);
        return res2 * 2; // continue execution with next promise in chain
    }).then((res3)=>{
        alert(`Third Result is = ${res3}`);
        return res3 * 3; // continue execution with next promise in chain
    }).then((res4)=>{
        alert(`Fourth Result is = ${res4}`);
        throw new Error('Breaking the Promise'); // throwing an error in promise
    }).catch((err)=>{ // catching the thrwn error
        alert(`Error Occured ${err}`);
    }).finally((final)=>{
        alert(`Husssshhhhhh done..... ${final}`);
    });
}