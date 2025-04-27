/*
! What is Middleware?
    it is an intermediary. sets up a link between , request and response.
    Jab bhi hum apna server setup krte hi , tab humare pass kuch request aati hi , aur uske asis pr hum kuch response send krte hi. 

    Aise kaan jo request ke ane ke baad , ya response ke jane ke baad krwana hota hi , unhe hum express ke ander middleware ki help se krwate hi. 

    Request --> Middleware --> Response

Middleware is a concept in development. 
in Express it is:- 
    functions that come into play after the server receives the reauest and before the response is sent to the client.


     Common Middleware 
        MethodOverride
            jiski help se html form se put delete request bhej rhe the
            
        bodyparser
            request ki body ko parse krne ke liye

        Express.static 
            backened ki static filr ko client ko serve krne ke liye
                static files are relative file
        
        express.urlencoded 
            same request ke ander ka data use kr paaye


    app.use(express.static(path.join(__dirname , "/public")))
    app.use(express.urlencoded({extended:true}));
        static & urlencoded --> are midleware function

        ! app use se hum ye chahte hi , jab request aaye , response se pehe hum ye wala function run krana chahte hi.

    Special Properties :- 
        - execute any code
        - req , res object ko access kr sakte hi
        - call the next middliware function in the stack.
            - chaining is possible. Meaning ki humara function control dusre function ke pass bhej rha hi , tab wo ffunction humara middleware ban jayega. so on
        - End the request - response cycle.
            Request - response cycle tab end hoti hi , jab response chala jata hi.
            - if he want he can send a response to stop the chaining


*/


//! our 1st Middleware 
/*
  Generally jo middleware ka kaam hota hi , wo hi next jo kaam hone wala hi , use excute karan hi , uske liye humare pass next parameter ..
    middleware function ko hum app.use ke ander banate hi.

    He can do two things :- 
        1. send a  response
        2. send control to someone.

            agar hum ye do work nhi krenge , tab humara web load hi hota rhega jitna kaam middleware ko krna hoga , wo utna krke wait hi krta rhega .

*/

//! using next()
/*
    next variable is used to represent next middleware.
     
    they work even if we send a wrong request.

*/


//! create utility middleware.
/*
    Logger
        which help in logging.
        means o useful information hi , use terminal ke ander ya console ke ander print krrna hi.
        like req.time , res.time , req.method , hostname


*/





