//Note : Variable, Space reserved in the memory
//. Const
//. let
//. var

//Note : Const__cant be reassigned
const accId = 12345;
// accId = 2
// console.log(accId); //* Assignment Error 

//Note : Let__
let accEmail = "bhawani@gmail.com"
accEmail = "qwe@gmail.com"
console.log(accEmail);

//Note : Var__
var accPassword = "123456789"
accPassword = "1212121211"
console.log(accPassword); //> var has been Depricated, due to scope issue

//Note : can be declared directly
accountCity = "BAM"
console.log(accountCity);

//Note : If unInitialized, takes default value as "undefined"
let accState;
console.log(accState);
console.table([accId, accEmail, accPassword, accountCity, accState]);

// ===========================================================================================================================
// ===========================================================================================================================

