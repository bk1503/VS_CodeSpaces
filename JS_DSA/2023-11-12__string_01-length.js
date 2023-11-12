//NOTE : Length, returns the number of characters in a string.
//. does not take any parameters.
//. this is a read Only parameter. No effect if we try to change it.
//. As its readOnly, doesn't change the original string.

// defining a string
let str = "Istudied in APS,Gopalpur";
str.length = 15;    //- since length property is readOnly, it doesn't effects/ changes the original value. 

// returns number of characters in the sentence string
let strLen = str.length;

console.log(strLen);    //* 24

