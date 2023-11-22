//. to invoke the function immediately
//. Purpose : to get rid of pollution created bt the globalScope variables
//. ()(),   1st() defination. 2nd execution call

//. Normal Function
// function chai(){
//     console.log("DB CONNECTED");
// }
// chai()

//. IIFE
//. wrap the function directly in () & execute it ()
//  1.Normal or Unnammed IIfe============================================
(
    function chai(){
        console.log("IIFE_Function");
    }
)(); //* gets executed immediately & should always be closed by ";"

// 2. By Arrow Function==================================================
(()=>{console.log("Iife By Arrow");})();

// 3.IIfe with Args======================================================
((name)=>{console.log(`IIFE with an args ${name}`);})('Abc');

// 4.Named IIFe==========================================================
(function name(){console.log("Named IIfe");})();

// 5. Multiple IIfe in a file, end the 1st iife by ";"
