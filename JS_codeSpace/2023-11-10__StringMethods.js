let name = "Bhawani_K"
const repoCount = 50
// console.log(name + " has a repoCount of " + repoCount);
// console.log(`${name} has a repocount of ${repoCount}`); //* StringInterpolation

const team = new String('qwerty')
// console.log(team[3]) //* r

// console.log(team.__proto__); // Note : {}, check in BrowserConsole it has many methods.
// console.log(team.length);   //* 6
// console.log(team.toUpperCase());   //* QWERTY
// console.log(team.charAt(2));   //* E
// console.log(team.indexOf('w')); //* 1, to get the position of an element.

const newStr = team.substring(1,5)
// console.log(newStr);    //* wert, doesn't include the last element

// NOTE : Slice
//. this also takes the -ve values, where it starts from reverse.
const anoStr = team.slice(1,4)
console.log(anoStr);    //* qwer

let revSlice = team.slice(-5,4) //- i.e: here length is 5
console.log(revSlice);  //* wer





