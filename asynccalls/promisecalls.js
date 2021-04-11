function getProducts(){

    // resolve means success
    // reject means fail
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();

        // subscribe to the success
        xhr.onload = function(){
            if(xhr.status === 200){
               // success callback
               resolve(xhr.response);
            }
        };
    
        xhr.onerror = function(){
            // failed or rejected
            reject('error moccured');
        };
        
         
        xhr.open("GET","https://apiapptrainingnewapp.azurewebsites.net/api/Products");
        xhr.send(); // make call
    });
    
}

async function getData(){
    console.log('Calling Async Operation');
    let resp = await getProducts();
    console.log(`Received Products = ${resp}`);
    console.log('Execution is complete');
}

getData();