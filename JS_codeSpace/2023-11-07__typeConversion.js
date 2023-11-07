let score = 123
// console.log(typeof score);

let valueInNumber = Number(score)
// console.log(typeof score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

let team = "Abc"
let convertStringToNum = Number(team)
// console.log(typeof team);   //* string
// console.log(typeof convertStringToNum); //* number
// console.log(convertStringToNum);  //* NaN, always check the typeOf before performing any operation

let ifVal = null
let convertNullToNum = Number(ifVal)
// console.log(typeof ifVal);  //* Object
// console.log(typeof convertNullToNum);  //* Number
// console.log(convertNullToNum);  //* 0   //!might create an issue. Always check the value before implementation.

// Note
//. 33 => 33
//. "33Asd" => NaN
//. true => 1; false => 0

let isLoggedIn = 1
let convertNumToBoolean = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn); //* number
// console.log(typeof convertNumToBoolean);  //* boolean
// console.log(convertNumToBoolean);   //* true

let emptyStrToBoolean = ""
let convertEmptyStrToBoolean = Boolean(emptyStrToBoolean)
// console.log(typeof emptyStrToBoolean);   //* String
// console.log(typeof convertEmptyStrToBoolean);  //* Boolean
// console.log(convertEmptyStrToBoolean);   //* False

let AbcToBoolean = "Abc"
let convertStrToBoolean = Boolean(AbcToBoolean)
// console.log(typeof AbcToBoolean);   //* String
// console.log(typeof convertStrToBoolean);   //* Boolean
// console.log(convertStrToBoolean);   //* true

// Note
//. 1 => true; 0 => false
//. "" => false
//. "Abc" => true

let someNum = 123
let convertNumToStr = String(someNum)
console.log(typeof someNum);   //* Number
console.log(typeof convertNumToStr);  //* String
console.log(convertNumToStr);   //* 123

