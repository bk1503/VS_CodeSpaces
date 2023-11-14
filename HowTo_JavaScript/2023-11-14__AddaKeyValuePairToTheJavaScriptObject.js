// How to add a KeyValue Pair in a JS Object

//.  Using Dot Notation
//- if the key is dynamic, if it contains spaces or hyphens or if starts with a number We will get an error message.
const obj = { name: "Ben" };
obj.age = 22;
console.log(obj); // { name: 'Ben', age: 22 }

//. Using []
const obj = { name: "Ben" };
const prop1 = "prop name";
obj[prop1] = "value 1";

console.log(obj);
// {"name": "Ben", "prop name": "value 1"}

//. Using Spread Syntax(...)
//- does not mutate/change the original object, rather creates the new Object
//- We can add multiple properties or iterables. Here, the merge is shallow Where any nested objects will not be copted to another object.
const obj = { name: "Ben" };
const newObj = { ...obj, age: 22 };
console.log(newObj); // { name: 'Ben', age: 22 }

//. Using Object.assign()
//- similar to spread but,here it joins 2 objects & mutates the target object
const obj = { name: "Ben" };
Object.assign(obj, { age: 22 });
console.log(obj); // { name: 'Ben', age: 22 }

