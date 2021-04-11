function getProducts(){
    let products = [];
    let xhr = new XMLHttpRequest();

    // subscribe to the success
    xhr.onload = function(){
        if(xhr.status === 200){
            products = xhr.response;
            console.log(`${products}`);
        }
    };

    xhr.onerror = function(){
        console.log('error moccured');
    };
    
    // subscribe to the fail

    // define the remoce calls
    // p1: HTTP METHOD: GET / POST / PUT / DELETE
    // p2: URL
    xhr.open("GET","https://apiapptrainingnewapp.azurewebsites.net/api/Products");
    xhr.send(); // make call
    return products;
}