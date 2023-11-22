//. currentContext (this)__in Object
const user = {
    userName: "_bk",
    price: 399,
    welcomeMsg: function () {
        // console.log(this.userName);
        console.log(`Welcome, ${this.userName}`); //* this refers to the current context, such that we can access the variables within the scope.
        console.log(this);  //* on the execuction of the function, "this" refers to the current values passed.
    }
}
user.welcomeMsg()
user.userName = "Qwe"
user.welcomeMsg()

// console.log(this);  //*{}, in NodeEnv this refers to the empty Object
// console.log(this); //! try in browser, we will get Window Object

// ======================================================================================

//.  this__inFunction
function thisInFunc() {
    // console.log(this);  //* gets the global object etc..
    let userName = "Abc"
    // console.log(userName);  //* "Abc"
    // console.log(this.userName); //* undefined, this context is only accessible in Objects, when refered in functions its not accessible
}
thisInFunc()

// ========================================================================================

//. this__inArrowFunction
const arrowFunc = () => {
    console.log(this);  //* {}
    let userName = "Abc"
    console.log(this.userName); //* undefined
}
arrowFunc()

// ==========================================================================================

//. Arrow Function Declaration
//- 1. BasicArrowFunc / Explicit return
// const addNums = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addNums(3,4));

//- 2. Implicit Return
const addNums = (num1, num2) => num1 + num2
const addNum = (num1, num2) => (num1 + num2)  //* If wrapped in {} needs return keyword, whereas if wrapped in () return keyword is not required.

console.log(addNums(7,8));
console.log(addNum(8,9));

//. how to return an object in implicit return
const retObjDemo = () => {userName : "_bk"} //* undefined
const retObj = () => ({userName : "_bk"})  //* Objects can't be returned only with {}, it needs to be wrapped under ()

//. Function Declaration in loop
const arr = [1,2,3,4,5,6,7,8,9]
arr.forEach(function(){})  //! Way_1
arr.forEach(()=>{}) //! Way_2
arr.forEach(() => ({})) //! Way_3


