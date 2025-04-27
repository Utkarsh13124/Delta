const express = require("express");
const app = express();

//! middleware is written , which can send response to request of some route, then the request does not reach till api/route

// //! our First middleware function
//   // abhi jo humne middleware create kiya hi , ye hr ek request ke liye response send kr rha hi.
//     app.use( (req , res )=>{
//         console.log("Hi , i am middleware.");
//         res.send("MiddlewareFinished.");
//     })

//! using next()
    app.use( (req , res , next )=>{
        console.log("Hi , i am middleware.");
        next(); // here it is referreing its next execution like if call for /listings then it will refer to that route or it will search for next middleware.
        // console.log("This also executes after next middleware or function, but will not run if response send before it.")
        // return next(); good practice is not to write anything after next, instead of using return next()
    })
    app.use( (req , res , next )=>{
        console.log("Hi , i am 2nd middleware.");
        next(); // here it is referreing its next execution like if call for /listings then it will refer to that route.
    })



app.get("/" , (req , res) => {
    res.send("Hi I am root.");
});
app.get("/random" , (req , res) => {
    res.send("Hi I am Random Page.");
});

app.listen( 8080 , () => {
    console.log("server is started.")
})



















