function UIGenerator(dataSource){
    // a closure private function
    // check the state of the data source
    function checkSource(){
        if(dataSource === undefined || dataSource.length === 0) {
           return  false;
        }
    }
    return {
        // list is a key that is a function used to geneate <select>
        list: function(){
            let result;
            if(!checkSource()) {
                result =  '<div> No records</div>'
            } else {
                result = `<select>`
                dataSource.forEach((v,i)=>{
                    result += ` 
                        <option value="${v}">${v}</option>
                  `
                });
                result+=`</select>`;
            }
            return result;
        }
    };
}