//. Function Defn
function funcName() {
    console.log("Function is getting executed");
}
// funcName   //* reference of a function
// funcName()  //* execution of the function

function sum(num1, num2) {
    // console.log(num1 + num2);
    let result = num1 + num2;
    // return result    
}
// sum() //* NaN, as we didnt provided the args
// sum(3, 4)  //* 7
// sum(4, "5")  //* 45

const result = sum(4, 5)  //* getting console printed doesn't mean it would get the "result" var printed
// console.log("result : ", result);   //* undefined, to get it printed we must return it.

function loginUserMsg(userName) {
    // return `${userName} has just logged in`
}

// console.log(loginUserMsg());  //* undefined
// console.log(loginUserMsg("_bk"));

// ==============================================================

// Providing default value
function loginUserMsg(userName = "Qwe") {
    return `${userName} has just logged in`
}
// console.log(loginUserMsg());

// ==============================================================

// Rest Operator
function calCartPrice(val1, val2, ...numVals) {
    return numVals
}
// console.log(calCartPrice(200,400,500,700,900,1000,2000));

// ===============================================================

// Rest Operator in Object

let user = {
    userName : "_bk",
    price: 199
}
function handleObject(anyObject) {
    // console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user)  //* need to pass the object that is being refered, if passed some other value it wont get the required result.
// handleObject({
//     userName : "_bk",
//     price: 399
// })  //* we can pass the object directly

const newArray = [100,200,300,400,500]
handleObject()
function returnArrayvalue(getArray) {
    return getArray[1]  //* return the refrence of the args
}
console.log(returnArrayvalue(newArray));  //* pass the Array to be returned
// =================================================================




