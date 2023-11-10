### Primitive, 
- Primitive DataType is always **CallByValue** => no modification in the original value.
    - where the values of the actual parameters are copied
    - Here, the changes occur in the dummy variables having no effect in the actual variable's values in the calling function.
    - Thus, can't alter or manipulate the actual variables
1. String   | <code>let team = "Abc"</code>
2. Number   | <code>let score = 234</code>
3. BigInt   | <code>let bigNum = 21684515151516515153n</code>
4. Boolean  | <code>let win = true</code>
5. null | <code>let superOver = null</code>
6. undefined    | <code>let superOver;</code>
7. Symbol   | 
    - <code>let teamId = Symbol("123")</code>
    - <code>let teamId_2 = Symbol("123")</code>
    - <code>console.log(teamId === teamId_2)    // false</code>
        - Here return type is always symbol and has unique value.


<hr>
<hr>

### Non-Primitive
- Non-Primitive DataType is also called as **CallByReference** => there is a modification in original Value.
    - Here, one can directly access the actual variables.
    - Thus, any user can easily alter or manipulate the variables/ values through the function calls.

- Array
    - <code>let teams = ["A", "B", "C"]</code>
- Object
```javascript
let myobj={
    name : "Bhawani_K",
    age : 25
}
```
- Function
```javascript
let func = function(){
    console.log("I'm function")
}
```



<!-- ================================================================================= -->

### typeOf
```javascript
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"
```
> Note:
>> - The data type of NaN is number
>> - The data type of an array is object
>> - The data type of a date is object
>> - The data type of null is object
>> - The data type of an undefined variable is undefined *
>> - The data type of a variable that has not been assigned a value is also undefined *
>> * - **typeof** Operator always returns a string(containing the type of operand)

<hr>

### Memory
- Stack
    - Primitive
    - gets the copy of a declared variable.
    - **Where it doesn't change the original value.**
```javascript
let name = "_bk"
let nickName = name
nickName = "Raju"

console.log(nickName)   // Raju
console.log(name)   // _bk
```

- Heap
    - Non-Primitive
    - gets the reference of the variable, 
    - **where it updates / changes the original value**

```javascript
let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "userTwo@outlook.com"

console.log(userOne.email)  // userTwo@outlook.com
console.log(userTwo.email)  // userTwo@outlook.com
```
