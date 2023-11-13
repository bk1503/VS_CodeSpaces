// Note : Array, type of Object which stores a collection of multiple items in a single variable name
//. resizeable and can contain a mix of different datatypes.
//. Array elements cannot be accessed using arbitary strings as indexes ex: arr1["Abc"],
//. it should be accessed using monogative integers as indexes ex: arr1[2]

//. Shallow Copies
//. where the properties has been shared with the same refrence point
//. changes occurs in original Array too.

//. Deep Copies
//. do not share the same refrence point
//. doesn't change the original array.

//. Array Declaration
// Way_1
const arr1 = ["123", 1, 2, 3, 4, 5, true, "Abc"]
// Way_2
const WCteams = ["India", "Australia", "NZ", "SA"]
// Way_3
const arr2 = new Array(1, 2, 3, 4)

//NOTE : Array Methods
//- 1. push
//? appends the ele to the end of an array.
//? returns the new Length of an array

// console.log(arr1.push("xyz"));  //* 8
// console.log(arr1);

//- pop
//? doesn't take any args
//? removes the last ele from an array & returns it
//? if empty, returns undefined.
//? doesnot modifies the original array.

// console.log(arr1.pop());

//- unshift
//? Inserts new ele towards the start of an array, due to which modification would occur in original array
//? Returns the newLength of an array.

// console.log(arr1.unshift("jkl"));   //* 8

//- shift
//? doesn't take any argument
//? Removes the 1st ele & returns it
//? doesn't modifies the original array
//? if array = empty, results undefined.

// console.log(arr1.shift());  //* "123"

// Questionaire Methods, returns true/false (boolean)
// - includes
//? checks if the array contains a certain ele
//? returns true / false (boolean)
// console.log(arr1.includes(4));  //* true

//- indexOf
//? returns the index of the 1st occurence of an ele.
//? returns -1, if ele is not present
// console.log(arr1.indexOf("Abc"));   //* 7

//- join
//? Adds all the ele of an array into a string
//? modifies the typeOf from Array to String

const joinArr = arr1.join()
// console.log(joinArr);
// console.log(typeof joinArr);

//- slice
//? returns the sliced section of an array, doesn't includes the upperLimit of the argument.
//? 
console.log(arr1.slice(1, 3));   //* [1,2]


//- splice
//? removes the ele from an array & returns those deleted ele
//? modifies the original array

// console.log(arr1.splice(1,3));  //* [1,2,3], cutsoff the ele from an original array. This manipulates the original array.

console.log(arr1);

