# JavaScript For Application Development
1. Using Array as a data structure for Data Processing
    - forEach(), map(), filter()
    - reduce()
        - Array may demand some commonly used operations
            - Sum of all numric values in array
            - Occurenaces / ferquency of an element in array
            - Groupby elements / records in array
        - reduce() function
            - used to update the state of the array by iterating over each element and processing it    
2. Objects with WeakMap and WeakSet
    - Memory Utilization with Weak References in JavaScript
    - WeakMap and WeakSet
        - Map(K,V)
            - K, the Key that is always a primptive type (string, number)
            - V, the value, that can be primpty type or object
        - WeakMap(Key, Value)
            - Key, is always an object
            - Value, is always an object    
3. JavaScript Reference Functions Extensions
    - 3 Types
        - Reference Function
            - the function block is stored in a variable / object
            - this function can be used as a implementation encapsulation object aka class
                - the 'this' prefixed declarations are accessed as 'public' 
                - rest all other declarations are private 
        - Close Function aka JavaScript Function that contains
            - 'this' prefixed properties
            - returing a Literal object with all publically exposed functions (or types)        
            - use the close function for distributing the 'final' funcationality to other projects in same or different organization 
    - Prototype
        - an approach where the function is attached using
            - properties  for enhancements
            - methods for enhancements
        - USe this as per the enhanced needs of the application
            - syntax
                - <FUNCTION_OBJECT>.prototype.<function-name> = function(parameters){... body ....}      
        - Object
            - __proto__ a property for defining prototype
                - a standard for defing extended proeprties for the object
                - mainly it was used for Object literal (var obj = {};)        
    - Closure
        - a variable that is defined out-side of the function becomes a windows scope variable
        - nested functions
            - like a variable the JS function can also define a internal or nested function
        - Closure is a nested function taht is having an access to declaration of variables its parent
            - It has a capacility of modifying these variable before returning the outer function or event after the outer function returns  
            - In real-word scenarios use closure for definingn Private function and properties for the JavaScript Function Object   
    -  The 'Function' Object
        - ES 3+ standard object that is used to create a function body dynamically in JavaScript
            - Syntax
                - let myFunction =  new Function('<IMPLEMENTATION-as-a-STRING>');         
4. JavaScript Module Approach
    - Immediately Invoked Function Expression (IIFE)
        - Create a scopde in IIFE
        - (function(){.... some ... work ... here...})();
            - The first pair of parathesis is a JS Expression parsed by browser as a single Scope Object
                - The scope defines highly cohisive functionaionality 
            - The second pair of  parathesis is a function invocation
                - This is Self--Invoking finction   
    - Module Pattern with IIFE
        - CReate a Namespace
            - Create a object literal to define a namespace
        - use IIFE as a Module Namespace instead of using Object Literal
    - Using IIFE as a JS Module Pattern
        - Syntax
            - let module = (function(){.....})();
                - access functions using
                    - module.<fn1>();
    - VERY IMP NOTE:
        - AVOIDE DECLARING GLOBAL SCOPE VARIABLES                         
    - Module Pattern using ES 6
        - Crrate Modules wit export and import 
            - The 'export' is used to export the Types (class, function, consant array, constant variable) from a source js file
            - The 'import', is used to import exported funcationality in other Js file
        - Use the 'type' attribute of tyhe <script> to load the JS file as module 
            - <script type="module" src="./../exportabletype.build.js"></script>   
                - The type=module may not work across all browsers across all devices so use following solutions
                    - USe Pure ES 6 export and import and restrict them to desktop browsers
                    - USe Module-Loaders
                        - systemJs
                        - WebPack
                        - requirejs            
5. Object Methods
    - apply()
        - USed to invoke a function of object by using the Object Context (name) on which it is invoked
            - First parameters is object as mandatory parameter and the second parameter si an array that contains additional parameters rhe function or method accepts
         - The method from the source object can be invoked for multiple different target object      
    - call()
        - USed to invoke a function of object by using the Object Context (name) on which it is invoked 
            - Accepts the first mandatory parameter as the object name and other parameters is an argument array defining an additional parameters to a function whihc is being invoked using 'call()'
                - for parameters 'call()' using a JS 'arguments' array 
        - The method from the source object can be invoked for multiple different target object         
    - bind()
        - a method that allows to pass arguments to a function w/o invoking it.
        - a strategic approach of encapsulating an original function by storing it's reference in other new function object
    - the apply() or call() can be used for methodm overloading based on the liberty of parameter passed to these methods

6. JavaScript Function Overloading
    - Implemented using apply()
7. JavaScript Optimized Functions for Speed Up execution and Memory Saving 
Approach (memoization)
    - An optimization technique thatisnused tio speed-up function execution by storing results ofina heavy-loaded operations in a cache object and the results will be retirned from the same cache objects
        - VERY IMP: Not a defacto standard in JS app, instead implement it explicitly as on need with Applied JS
            - React.js and Angular have some support for Memoization
        - Generaly used in case of Recursive operations to store results in same object (aka Cache)     
8. Promises
    - Chaining of Promises
        - Make FIrst Call and in success offirts call make second call and so on..
            - Promise().then().catch();
                - .then(), success or resolve
                    - Promise().then().catch();
                        - Chain of Promise Objects, creating chain explicitly as on requirments
                - .catch(), error or rejected
                    - Error Handling
        - Promise().then().then().then()...catch()
            - The first then() returns promise that is further processed by next then() in the chain.      
                - Relying on promise object to define a chain  
        - ES 6 have provided the 'fetch()' object that offers then Promise chaining to receive data and then process data             
    - Parallel Execution of Promises
        - Micro-Tasks 
            - Peforming the Parallel Async or promise based operations and eveluating them at a time as Micro-Tasks (single independent execution workload) 
        - Promise.all([Array of Promises]);
            - The array can be max 10 promises
        - Proise.all([]).then((responses)=>{}).catch();
            - responses, is the return value of successfull execution of all promises
            - VERY IMP: If any of the promise is failed the Promise.all() will return error and the catch() will be invoked        
    - Error Handling
9. Async / Await
    - Async Generators       
        - Generators
            - the * marked function used to iterate over the sequence and return each entry from sequence and move to next till the sequence does not end or reached to last record in sequence
        - if the generator function is performing long running executions (e.g. AJAX / promise based calles) then use the generator function async generator, means mark the generatr function as async
            - This is used by redux-saga for REST API calls in React-Redux apps
            - USed in NGRX for Effects (aka AJAX calls)       


# Hands-On-Labs
# Date: 24-April-2021

1. Create a map that will store Products Infrmation in a Key/Value pair. The Map will be arranged as the 'Key' is the Category Object as {CategoryId:, CategoryName: ''} and Value is an array of Products for each category e.g. let wm = new WeakMap();, wm.set({},[{},{},{}]);
Perform the following operations on this Map
    - Create a Group of Categories having Price for their Products range from 0 to 1000, 1001 to 10000, 10000 onwards
    - Show the Products data in HTML Table sorted by Price of each product

2. Create a Close function that will perform following Operations on Employee Object
    - Returns public functions for CRUD oeprations for employees
        - Note: EMpNo must be uniuque 
    - Must contains a Closure  (aka private) funciton that will validate Employee object based on following rues
        - EmpNo must be + ve integer
        - EmpName must starts from UpperCase character and must have Characters
        - Salary must be +ve integer  

# Date 25-April-2021

1. Define an overloaded search() method forsearching record on any collection (array/map/set) based on parameter(s) passed to search() method
    - e.g. if collection is of Employees wtih EmpNo, EMpName, Designation, Salary, Experience, DeptName
        then the search() may acept following parameters
            - search(DepName="" || Designation = "")
                search(dname, or, designation)
            - search(DepName="" && Designation = "")  
                - search(dname, and, designation)
            - search(from sal, to sal)
            - search(ename)
            - search(dname)
            - search(designation)    