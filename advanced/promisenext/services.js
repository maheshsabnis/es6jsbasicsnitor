function getCategories(){
     let response = fetch("http://localhost:6001/api/categories",{
         method:'GET'
        });   
    return response;    
} 
 

function getProducts(){
    let response = fetch("http://localhost:6002/api/products",{
        method:'GET'
       });   
   return response;    
} 

// use async for the method that is calling a function
// which returns promise object
async function getAllData(){
    let catReponse = await getCategories();
    let categories  = await catReponse.json();
    console.log(`Receivedd Categories ${JSON.stringify(categories)}`);

    let prdReponse = await getProducts();
    let products  = await prdReponse.json();
    console.log(`Receivedd Products ${JSON.stringify(products)}`);
}

getAllData();