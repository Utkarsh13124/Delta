const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
//! middleware is written , which can send response to request of some route, then the request does not reach till api/route

// //! our First middleware function
//   // abhi jo humne middleware create kiya hi , ye hr ek request ke liye response send kr rha hi.
//     app.use( (req , res )=>{
//         console.log("Hi , i am middleware.");
//         res.send("MiddlewareFinished.");
//     })

//! using next()
    // app.use( (req , res , next )=>{
    //     console.log("Hi , i am middleware.");
    //     next(); // here it is referreing its next execution like if call for /listings then it will refer to that route or it will search for next middleware.
    //     // console.log("This also executes after next middleware or function, but will not run if response send before it.")
    //     // return next(); good practice is not to write anything after next, instead of using return next()
    // })
    // app.use( (req , res , next )=>{
    //     console.log("Hi , i am 2nd middleware.");
    //     next(); // here it is referreing its next execution like if call for /listings then it will refer to that route.
    // })

//! Creating utility Middleware
    // we also can add something to request.
    // agar hum middlewares ko last me likh denge , routes ke baad to , pehle route matching hoga , agar ho gya to response yhi se return ho jayega. 
  //! we created logger. NPM also have Morgan utility middleware logger
        // app.use( (req , res , next) => {
        //     req.time = new Date(Date.now()).toString();
        //     console.log(req.method , req.hostname, req.path , req.time);
        //     next();
        // } )

//! exploring app.use()
    app.use("/random" , (req, res , next) => {
        console.log("I am here only for random and its subroutes.");
        next();
    });

//! Api Token as Query String
    // Lets create a middle-ware for an api that checks it the access token was passed in the query string or not.
const checkToken = (req , res , next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        return next();
    }
    // res.send("ACESS DENIED!");
   //! Sending custum error. 
    //! Using inbuilt class.
    // throw new Error("ACESS DENIED!"); //? Error is inbuilt Class in JS 
    //! Using custom class 
    throw new ExpressError(401 , "Access Denied!");
};
//! app.use("/api"  , checkToken ); // alt option is discussed below

//! Passing multiple Middleware.
    function anotherMiddleware(req, res, next) {  
        // Additional processing  
        console.log("Another middleware function executed.");  
        next(); // Call next() to proceed  
    }  
    // also we could pass the middleware in app.get()
    app.get("/api" , checkToken , anotherMiddleware ,(req , res) => {
        res.send("data");
    })

app.get("/" , (req , res) => {
    res.send("Hi I am root.");
});
app.get("/random" , (req , res) => {
    res.send("Hi I am Random Page.");
});



app.get("/err" , (req , res) => {
    abcd = abcd; //! jaise hi error generate hua , waise hi hum niche wale error handling middleware me chale gye. 
});
 //! Error Handling Middleware
    app.use((err , req , res , next) => {
        let {status , message} = err;
        // console.log(err);
        // console.log("------------ERROR--------------------");
        // next(err); 
      // showing generated error on frontend.  
        // res.send(err); // in api?queryaccess call , when middleware calls to next middleware function wy throwing error, then we get this , which we are using the same genrated error , to throw on frontened .
        res.status(status).send(message);// error send krna with msg.
    })

    // app.use((err , req , res , next) => {
    //     // console.log(err);
    //     console.log("------------ERROR 2--------------------");
    //     next(err);
    // })



//! Middleware for 404 
    //? Make sure you place it in end.
    // - Error handling middleware.
app.use((req , res) => {
    res.status(404).send("Page is found!");    
})

app.listen( 8080 , () => {
    console.log("server is started.")
})





//! custom error Classes

