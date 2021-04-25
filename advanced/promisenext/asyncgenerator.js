// the generator function
// the 'yield' is used to return record at current position
async function* GetCategoriesGenerator(){
    yield fetch("http://localhost:6001/api/categories")
        .then((resp)=>{
            let cat = resp.json();
            return cat; // async reolved response
        });
}

// lets write a consumer function that will execute the 
// async generator and read data received from it for processing

function consumer(){
    let response = GetCategoriesGenerator();
    // start iterating over the response
    let record = response.next();
    // process the response
    record.then((category)=>{
        console.log(`Received Catefgory ${JSON.stringify(category)}`);
    })
}
consumer();
