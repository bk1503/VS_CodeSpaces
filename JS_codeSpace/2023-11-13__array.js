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
// arr1.push(WCteams)
// console.log(arr1);   //* ["123",1,2,3,4,5,true,'Abc', ["India", "Austrlia", "NZ", "SA"]]
// console.log(arr1[8][1]); //* Australia

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

// console.log(arr1.slice(1, 3));   //* [1,2]


//- splice
//? removes the ele from an array & returns those deleted ele
//? modifies the original array

// console.log(arr1.splice(1,3));  //* [1,2,3], cutsoff the ele from an original array. This manipulates the original array.

//- concat
//? combines 2 or more arrays
//? returns new Array without modifying any existing arrays.

// const arr3 = WCteams.concat(arr1)
// console.log(arr3);

//- spread
//? it takes an array and expands it to individual elements.
//? it merges 2 or more array into one new array.

// const spArr = [...arr1, ...WCteams]
// console.log(spArr);

//- Flat
//? returns new array, by combining the array to a specific depth.

// const arr = [1,2,3,[4,5,6],[[7,8],9]]
// console.log(arr.flat(1));

//- isArray
//? generally used in web scraping, while getting the data in multiple formats.
//? returns the boolean Value

// console.log(Array.isArray("QWERTY"));  //* Checks if the given arg is an Array, returns boolean value
// console.log(Array.from("QWERTY"));  //* the given arg Object is converted to an Array.

//- Of
//? returns new array
let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3));

// console.log(arr1);

