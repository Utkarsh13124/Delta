//! error handling (Express Default)
/*
    Syntax Error :- Development stage pr hote hi.
    Many errors happen at production level :- Like failure of Api , or Database , or like we are showing goole maps , but it shows error.

    ! Why to handle?
        - jisse ki user ko jyada details na dikhe , client side pr , in case of errors.
        - most importantly uska expeirence na kharab ho , isilye humhe acche se errors ko handle krna jarrori hi.

    How default works ? 
        - aur jo hume error ane pr lots of lines dikhti  hi , unhe stack trace kehte hi.

        - default error handler , status code bhi send krta hi, 

        ! - in case of syntax error , it sends reference error , and stack trace , and use jaise handle kiya hi .

        ! error handler is  a middleware  function , that is placed by express at end of middleware function stack.


    // res.send("ACESS DENIED!");
! Sending custum error. 
    throw new Error("ACESS DENIED!");
    Default Handler isko bhi later own handle krega., but error msg humara show hoga

    Generally hum error classes bnake errors ko send krte hi. 
*/

//! Error Handling Middleware
    /*
        next() ==> it will search for next non-err handling middleware.

        next(err) ==> isiliye jab hum next ko call krte hi , to hum usme err pass krte hi,
        jisse wo koi aur si handling ko bhi deal kr le, and at last default wali se bhi deal kr le
            ! this statement basically means ki humne apni taraf se error ko handle kr liya ab aage koi aur sa konsa middle ware jo ise handle kr sakta hi , like custom middleware or default middleware.
    
    */

//! custom error Class
/*
    2 - succes 
    4 - based client based.
    5 - server side error

*/


//! Handling Async Error
/*  
    Suppose mongo DB ya Mongoose koi error send kr de.

    Normal Process :- Make expressError.js file  , definig custom error and custom class,call super first. 

    In case of Async error.
        Asynchronous function ke case me error throw hone ke baad express bydefault  next() ko call nhi lagata.
        Asynchronous function ke ander hum just error ko throw nhi krenge, 
            ? hum next ke ander apne error ko pass krenge.
      * will work in Normal function
        throw new ExpressError(404 , "Chat not found.");
      * Will work in async funnction
           throw new ExpressError(404 , "Chat not found.");

    Try-catch & AsyncWrap is solution. 
      hum async errors ke liye asyncWrap banayege.

*/





//! using try-Catch
/*
    used generally with async and await.

    single specific error ko hum if se bhi tackle kr sakte hi . 

*/


//! using Wrap-async
/*
    utility for writing try-catch  better way , AS TRY CATCH IS BULKY

   We will make a  wrapAsync/ExpressWrapAsync function , that is returning a function and jiska argument bhi functionn hi.
    in short taking a function , returning new function

    NEW FUNCTION WILL HAVE (REQ , RES , NEXT)
     AND RETURNING FUNCTION WILL RUN THE ARGUMENT FUNCTION WITH CATCH

     function wrapAsync(fn){
        return function (req , res , next){
            fn(req , res, next).catch((err) => next(err));
        }
     }

        const hello = () => console.log("Hello");

        1st way => hello();

        2nd way
        const retFn = asyncWrap(hello);
        console(retFn());

    ? Applying above logic : - for modifying trycatch
        we will pass our async function of routes into wrapAsync as callback
         and then our wrapAsync will excute it as try-catch

app.get("/chat:id" , asyncWrap( async (req, res, next) => {
        let {id} = req.params;
        let chat = await = Chat.findById(id);
        if(!chat){
            next(new ExpressError(500 , "Chat not Found."));    
        }
        res.render("edit.ejs", { chat } );
    })
);


*/

//! mongoose Errors
/*
    like validation errors , caste errors 

    Custom error , for Specific Error 
      Each type of error has a name, that can be accessed through 
        ? err.name attribute
        then we could have if condition. 
         also if we have lots of work to do after getting the error , like saving them in docs , printing , etc , then we cna make a //! handleValidationErro function for it

        if(err.name === "ValidationError"){
            err = handleValidationError(err);
        }
        next(err);

    
    const handleValidationError = (err) => {
            console.log("This is a validation error.");
            console.dir(err);
            return err;
        }
        


*/








