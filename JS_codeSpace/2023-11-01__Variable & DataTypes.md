### Structure of Browsers and nodeJS
- The structure of JS platforms **webBrowser** and **nodeJS**. i.e the "standardLibrary" and "platformAPI" both are hosted on top the foundational layer with a JSengine and a platform specific "core" functionality.
![Alt text](https://exploringjs.com/impatient-js/img-book/big-picture/javascript-platforms.svg)
- Two APIs are hosted on top of this foundation:
    - The JavaScript standard library is part of JavaScript proper and runs on top of the engine.
    - The platform API are also available from JavaScript – it provides access to platform-specific functionality. For example:
        - In browsers, you need to use the platform-specific API if you want to do anything related to the user interface: react to mouse clicks, play sounds, etc.
        - In Node.js, the platform-specific API lets you read and write files, download data via HTTP, etc.
### Syntax
#### Basic
1. Comments
    - // Single Line Comment
    - /* Multiple Lines */
2. Variables
    - var
    - let
        - block scoped
        - 
    - Const
        - must be initialized immediately
        - can't be redeclared
    
var | let | const
---------|----------|---------
 The scope of a var variable is functional scope | The scope of a let variable is block scope. | The scope of a const variable is block scope.
 It can be updated and re-declared into the scope. | It can be updated but cannot be re-declared into the scope. | It cannot be updated or re-declared into the scope.
 It can be declared without initialization. | It can be declared without initialization. | It cannot be declared without initialization.
 It can be accessed without initialization as its default value is “undefined”. | It cannot be accessed without initialization otherwise it will give ‘referenceError’. | It cannot be accessed without initialization, as it cannot be declared without initialization.
 hoisting done, with initializing as ‘default’ value | Hoisting is done, but not initialized (this is the reason for the error when we access the let variable before declaration/initialization) | Hoisting is done, but not initialized (this is the reason for the error when we access the const variable before declaration/initialization)
<hr>
<hr>

##### #Interview_Scope

var | let | const
---------|----------|---------
 Variables declared with var are in the function scope. | Variables declared as let are in the block scope. | Variables declared as const are in the block scope
 ```javascript 
 function f1(){ var a = 10}
 console.log(a) 
 // var, on execution we will see the error as **not defined** becoz var variables are only accessible in function scope.
 ```
 | 
 ```javascript
 for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
// let, on execution we will see an error as "i is not defined" because let variables are only accessible within the block they are declared.
 ``` 
 | 
 ```javascript
{
  const x = 2;
  console.log(x);
}
console.log(x);
// const, on execution we will see that x was defined under the block was accessible, 
// but when you try to access x outside that block, you will get an error.
 ```
##### Interview_Hoisting
- **Hoisting** means we can define a variable before its declaration.
- which is being allowed only in var

    var | let | const 
    ---------|----------|---------
     allowed | Not allowed | Not allowed
     ```javascript
     x = 8; 
     console.log(x); // no Error
     var x;
     // as we can declare var variables after defining them.
     ``` 
     | 
     ```javascript
     x = 8; 
     console.log(x); // gets Error
     let x;
     // let, gets an error as **let** variables do not support hoisting.
     ``` 
     | 
     ```javascript
     x = 8; 
     console.log(x);
     const x;
     // const, gets an error as **const** variables do not support hoisting.
     ```
<hr>

3. Primitive
    - Boolean
        - true, false
        - usually used for conditional operations, i.e. ternaryOperators, if-else, while etc..
    - Number
        - represents both floating pt nos & integers.
        - `let num = 1.141, let num = -123`
    - BigInt
        - really big num, ranging around 2<sup>53</sup>
        - we can safely store and operate on large integers even beyond the safe integer limit `(Number.MAX_SAFE_INTEGER)` for Numbers.
        - should be ended by "n"
        - `let num = 87326735902358932728937283n`
    - String
        - 3types
        - "asd", 'asd', `asd`
    - null
        - standalone value
        - indicates the absence of an object
        - `typeof null === "object"`
    - undefined
        - indicates the absence of a value, 
        - here, the `typeof undefined = undefined`
        - `let car;    // Value is undefined, type is undefined`
    - Symbol
        - always gets the unique value
        - purpose of symbol is to create unique property keys which are guaranteed not to clash with the keys from other code.
    - Object
        - written with {} braces
        ```javascript
        const person = {
            name:"John",
            age:50
            };
        ```
    - Array
        - denoted with [] braces
        - `const cars = ["Saab", "Volvo", "BMW"];`
    - typeOf
        - to find the dataType of a JS variable.
        - returns the type of a variable or an expression
        ```javascript
        typeof ""  // returns "string"
        typeof "John"  // returns "string"
        ```
<hr>

##### Interview_DataTypes
- return statement with noValue, returns undefined.
    - `return;` // undefined

- A variable declaration without initialization, initializes the variable to undefined.
    - `let x;` //undefined

<hr>

    