// fn is a function that is to be optimized
// generally 'fn'is recursive 
function memoizeImplementation(fn){
    let cacheResult = {}; // the cache object
    console.log(JSON.stringify(cacheResult));

    return function(){
        let cacheKey = arguments[0]; // the parameter to fn
        if(cacheResult[cacheKey]){
            return cacheResult[cacheKey]; // rerurn data from cache
        } else {
            // else perform new invokcation to execute the function 
            let newResult = fn.apply(this, arguments);
            // set new result in cache
            cacheResult[cacheKey] = newResult;
            // return the newresult
            return newResult;
        }
    };
}

// implement the recursive function in javascript
// the value of 'n' will be cached at the cacheResult
// the same cacheResult will be updated again and again
// browser will not use seperate references for result of 'fibo'
let fibo = memoizeImplementation((n)=>{
    if(n === 0 || n === 1){
        return n;
    } else {
        return fibo(n-1) + fibo(n - 2);
    }
});
console.log();
console.log(`Fibo result for 10 = ${fibo(10)}`);