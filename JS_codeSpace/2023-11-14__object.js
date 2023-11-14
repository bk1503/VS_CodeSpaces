// singleton
// Object.create


// Note : Way_1, by using Object Literals
let mySym = Symbol("id")  //- to check if its symbol, print user Object
const user = {
    "full name": "Abc",
    [mySym]: "key_2",
    age: 20,
    location: "BAM",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Thursday"],
}

//. Ways to access Object
// console.log(user.age);  //! correct, but not recommended much
// console.log(user["age"]);   //* use this, becoz behind the scene js stores the keys in string format.

//. If we are having space in b/w, there too we cant use dot Notation. Such that we have to use [""]
// console.log(user.full name); //* cant access it, need to wrap it with []
// console.log(user["full name"]);
// console.log(user[mySym]);
// console.log(typeof user[mySym]);
// console.log(typeof mySym);

user.email = "qwe@yahoo.com"
// Object.freeze(user) //. Prevents any modifications in the object
user.email = "jkl@outlook.com"
// console.log(user);

user.greet = function () {
    // console.log("hello! JS user");
}

// console.log(user.greet);  //* gets the refrence of the function, this doesn't executes the function
// console.log(user.greet());  //* undefined

// ===========================================================================================================
// ===========================================================================================================

// Note : Way_2, singleton Object
const newObj = new Object()

newObj.id = "123Abc"
newObj.name = "Abc"
newObj.email = "Abc@gmail.com"
newObj.isLoggedIn = true
// console.log(newObj);  //* {}

let user2 = {
    email: "abc@gmail.com",
    userName: {
        fullName: {
            firstName: "Bhawani",
            lastName: "K"
        }
    }
}
// console.log(user2.userName?.fullName.firstName);

let obj1 = { 1: "a", 2: "b" }
let obj2 = { 3: "c", 4: "d" }
// let joinObj = Object.assign(obj1, obj2) //* here the obj2(source) is being placed in the 1st element i.e obj1
// let joinObj_2 = Object.assign({}, obj1, obj2)   //* generally preffered, where all the sources are being placed in {}
// console.log(obj1, obj2);
// console.log(joinObj);

// let spreadObj = {...obj1, ...obj2}
// console.log(spreadObj);

const users = [
    {
        id:1,
        name:"A"
    },
    {
        id:2,
        name:"B"
    },
    {
        id:3,
        name:"C"
    }
]

// console.log(users[1].name);
console.log(Object.keys(users));    //* returns all the keys of an object wraped in []
console.log(Object.values(users));  //* returns all the values of an object wraped in []
console.log(Object.entries(users)); //* returns the array of array of all the entries of the object


