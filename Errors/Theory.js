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
    app.use()