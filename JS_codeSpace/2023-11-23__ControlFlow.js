//. if_Statement
// if (condition) {
//     // condition = true, only then this gets executed 
// }

//. if-else
// if (condition) {
//     // condition = true, this code gets executed
// } else {
//     // executed if the condition is false.
// }

//- conditional operators
//- <, >, <=, >=, ==, !=, ===(checks for datatype & value too), !==

const score = 200;
if (score > 100) {
    // var power = "fly"    //* var, is a global
    // let power = "Wind" //* let, prints the console within the {} / scope.
    const power = "spark"   //* const, prints the console within the {} / scope.
    console.log(`My Power is ${power}`);
}
// console.log(`My Power is ${power}`); //* if var, it prints the value. Hence there is a chance of variable pollution.
//* gets undefined for let & const.

//. if_else ShortHandNotation(SHN)
const balance = 1000;
if (balance > 500) console.log("test--");

//- ===============================================================================================================================
//- ===============================================================================================================================


//. Nesting
const bal = 1000;
if (bal < 500) {
    console.log(`less than 500`);
}else if(bal <700){
    console.log(`less than 700`);
}else if(bal<900){
    console.log(`less than 900`);
}
console.log(`less than 1200`);

let userLoggedIn = true;
const userLoggedInusingEmail = true;
let debitCard = true

//- &&_And operator
if(userLoggedIn && debitCard){
    console.log(`Allow to buy course`);
}
//- ||_or operator
if(userLoggedIn || userLoggedInusingEmail){
    console.log(`User Logged In`);
}

//. Switch
const weekEnd = "Saturday"
switch (weekEnd) {
    case "Sunday":
        console.log("WeekEnd");
        break;
    case "Monday":
        console.log("WeekDay");
        break;
    case "Tuesday":
        console.log("WeekDay");
        break;
    case "Wednesday":
        console.log("WeekDay");
        break;
    case "Thursday":
        console.log("WeekDay");
        break;
    case "Friday":
        console.log("WeekDay");
        break;
    case "Saturday":
        console.log("WeekEnd");
        break;
    default:
        break;
}


