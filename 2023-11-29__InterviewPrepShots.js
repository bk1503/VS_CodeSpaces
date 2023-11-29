function showData() {
    console.log(`variable name is ${name}`);    //* undefined
    console.log(`variable name is ${age}`); //* throws error: cannot access befor initialization
    var name = "SamBhaw"
    let age = 21;
}
showData();

//Note. This uses the concept of hoisting, where the variables declared var, are moved to the top of the function/ Object and get assigns itself as undefined.