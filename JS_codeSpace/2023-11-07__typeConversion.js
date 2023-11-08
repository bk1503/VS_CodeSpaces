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
// console.log(typeof someNum);   //* Number
// console.log(typeof convertNumToStr);  //* String
// console.log(convertNumToStr);   //* 123

// =============================================================================================
// =============================================================================================
//- Operations

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);
// console.log(2 ** 2);

let str1 = "Bhawani"
let str2 = "K"

let str3 = str1 + str2
console.log(str3);

// ================================================================================================
// ================================================================================================

console.log("1" + 2);  //* 12
//- => Getting 1st element as string makes JS think all the elements in it as String, Such that it performs the String Operation on it.

console.log(1 + "2");   //* 12
//- As 1st element is Number, JS performs Numeric operation on it. Next the 2nd element is String so performs the String operation and concatenates the elements.

console.log("1" + 2 + 2);   //* 122
//- => Getting 1st element as string makes JS think all the elements in it as String, Such that it performs the String Operation on it.

console.log(1 + 2 + "2");   //* 32
//- performs the numeric operation on it, then concatenates the String to it.

console.log(+true); //* 1
// console.log(true +); //* produces error

console.log(+""); //* 0

//! Dont write confusing code, use parenthesis to group the elements and to perform the operations on it.

let counter = 100;
++counter
console.log(counter);   //* 101

let count = 0
count++
console.log(count); //* 1



