// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);   //* true, as JS automatically converts string to Number
console.log("02" > 1);  //* true

// Note : On Comparision, make sure the dataType of the compared elements should always be same.
//. Always check result value before implementing it in code.

//> Avoid
console.log(null > 0);  //* false
console.log(null == 0); //* false
console.log(null >= 0); //* true

//Note : 
//. Comparisions convert null to a number, treating it as 0. 
//. => null >= 0 is true. & null > 0 is false.


//> Avoid this type of coding
console.log(undefined == 0);    
console.log(undefined > 0); 
console.log(undefined < 0 );    

// NOTE :
//. == checks for value
//. === check for the value & the dataType of the elements.