// the ES 6 fetch object
// this is the object officially provided by Mozilla for HTTP operations
// this return Promise object 

function fetchData(){
    let response = fetch("https://apiapptrainingnewapp.azurewebsites.net/api/Products",{
        method:'GET'
    });

    return response;
}