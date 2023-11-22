// var 
// let 
// const 

// function
addOne(7)   //* can be accessed.
function addOne(num) {
    return num + 1;
}
addOne(5)

// ======================================================

//. expression, where the function has been assigned to a variable.

// addTwo(7)  //* cann't be accessed before initialization.
const addTwo = function (num) {
    return num + 2;
}
addTwo(5)

// ==========================================================

//. nested Scope
function one() {
    const userName = "bk"
    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
one()

// ======================================================================
//. closure



// ======================================================================


