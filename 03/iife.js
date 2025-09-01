(function chai(){

    console.log(`db connect `)
}
)();  // semicoln is important

// this will get invloved when ever we are trying to run the file no need to call this function
// put paranthesis for the function and outside also
//if we want our function to be not polluted by global scope iife ..

//chai() //  


(() => ({log:console.log("db connect2")}))();

//name iifi
((name)=>({log:console.log(`dbconnect22 -${name}`)}))("hitesh");