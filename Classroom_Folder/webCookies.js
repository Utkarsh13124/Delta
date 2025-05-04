// Web Cookies/HTTP Cookies/Server Cookies/ Cookies 
/*
    HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the wuser's computer or other device by the user's web browser.

        tiny chunks of data  , stored in web browser.
        sends by server to our browser.

    Works of Cookies : - 
        session management. -> humara website kuch cheeze yaad krti hi
        tracking
        personalization

    Just like we choose a dark mode for a website , so wo website ke alag alag jagah bhi applied rehta hi , eisa nhi ki hum baar baar ja ke sekh rhe hi.
    Authetication me help krta hi , baar baar nhi login krna padta hi.

*/

const cookieParser = require("cookie-parser");
const { app } = require("./server2");

//! sending cookies
/*
    cookies are send in key value pair.
    res.cookie("key" , "value" , {option_will_be_here});

    cookies bhej di , aur browser me save hogyi , to wo har website ke hr jagah me dikhayi degi.

*/

//! cookie Parser.
/*
    how a page is parsing  &  accepting the cookies.

    cookies request ke ander hoti hi

  * works if have reauired cookie-parser
    console.log(req.cookies); // ? for unsigned cookie
    console.log(req.signedCookies) // ? for signed cookies
    humhe ek middleware bhi use krna hota hi.


    ! cookie-parser

        npm package
        app.use(cookieParser());
            this simple line parse the cookies, and it is put in starting before routes. as it is middleware.

        we can also create cookie in browser

*/


//! Signed-cookies
/*
    cookies ko tempering and unintensional se bachne ke liye hum signed cookie ka use krte hi
    
    suppose idhar se humne cookie bheji , madeIn India ki , udhar se koi tempering krke US, China kr diya .

    2 - step process

    we will add some 
attributes in cookie
for signed :_ 
    { signed : true }

    & cookieParser me humhe koi string bhejni rhegi, code ko secret bnane ke liye

    Main reason is to protect from altering of cookie


    console.log(req.signedCookies) me dikhayi dega , agar koi change nhi kiya hoga , agar kuch changes kiye honge to waha pr wo cookie nhi dikhayi degi.
*/



