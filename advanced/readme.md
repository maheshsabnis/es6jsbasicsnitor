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
    - Module Pattern with IIFE
    - Module Pattern using ES 6
5. Object Methods
    - apply()
    - call()
    - bind()
6. JavaScript Function Overloading
7. JavaScript Optimized Functions for Speed Up execution and Memory Saving Approach (memoization)
8. Promises
    - Chaining of Promises
    - Parallel Execution of Promises
        - Micro-Tasks 
    - Error Handling
9. Async / Await
    - Async Generators         


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