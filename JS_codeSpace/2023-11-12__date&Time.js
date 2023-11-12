// Note : Date
    //. Date Object encapsultes an integral number which represents milliseconds
    //. starting from January 1st,1970....UTC
    
//. Temporal, api proposal where we can have a global object for Date
//. eg :-
    //. Temporal.Now.instant(), gets the current system exact time
    //. Temporal.Now.timezone(), gets the current system timezone.

//- Way_1
let myDate = new Date()
// console.log(myDate);    //* 2023-11-12T12:37:02.649Z
// console.log(myDate.toString()); //* returns string representation of Date
// console.log(myDate.toDateString()); //* Returns date as String Value
// console.log(myDate.toISOString());  //* returns date as string in ISO format.
// console.log(myDate.toJSON());   //* 2023-11-12T14:07:03.606Z
// console.log(myDate.toLocaleDateString());   //* 12/11/2023

//- Way-2
let createdDate = new Date("12-11-2023")
// console.log(createdDate);   //* Date Constructor, returns in JSON format
// console.log(createdDate.getTime()); //* returns the value in miliseconds
// console.log(createdDate.getMonth());   //* gets the month using localTime

let myTimeStamp = Date.now()
// console.log(myTimeStamp);   //* returns in no. of miliseconds

let dateToday = new Date()
console.log(dateToday.getMonth()+1);  //* 11, starts from 0
console.log(dateToday.getDay());
console.log(dateToday.toLocaleString());
console.log(dateToday.toLocaleString('default', {weekday:"long"}));

