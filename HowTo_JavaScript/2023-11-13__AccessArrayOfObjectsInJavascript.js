// Note : Array, is a collection of elements which hold a number of properties & values.
//. Approaches to access the array of Objects in JS:
let ArrObj = [
    {
        name:"Abc",
        age:12,
        gender:"Male"
    },
    {
        name:"qwe",
        age:34,
        gender:"Female"
    }
]

//. 1. Using Dot Notation
//- We can access the specific property of an object in the [{}], but not the whole Object.
// console.log(ArrObj[0]);

//. 2. Using [] notation
// console.log(ArrObj[0].name);

//. 3. using For...in loop
//- we can access both the whole ele & the properties of an object
for (let ele in ArrObj) {
    // console.log(ArrObj[ele].name);
}

//. 4. Using for...each loop
//- allows us to loop through the arrayOf Objects and access each ele individually.

ArrObj.forEach((e)=>{
    // console.log(e.name);
})

//. 5. using map() method
//- map() is called on each element of the original array, Results in producing the new Array

ArrObj.map((e)=>{
    // console.log(e.name);
})

//. 6. using filter() method
//- allows to access the elements of an arrayOf Obj
//- also shows hoe to get a specific obj from [{}] using clause in filter function.

// Way_1
ArrObj.filter((e)=>{
    // console.log(e.name);
})

// Way_2
ArrObj.filter(function (item) {
    return item.name === "Abc"
})
