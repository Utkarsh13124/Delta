const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.listen( port , ()=>{
    console.log(`Listening on port ${port}`);
}); 

/* 
    Ejs ko humhe externally require krne ka jaroorat nhi reht hi , 
        kyuki express ise internally require kr leta hi.

    view word is related to "template"

    before using ejs humhe use set krna hota hi , template bnane ke liye ejs ko use krenge.
        view engine matlab, template engine

    ejs ke case me hum responses ko send nhi render() krte hi.
        and hum response ke ander ek ejs file bhejte hi.

        ab humhe ejs ki file bnanai hi, 
        so humne view engine use kiya , then humhe saari file ko ek views directory bnake usme store krna hoga. 
    
        waha pr hum ek ejs extension ki file bna denge.

        ab hhum render krenge and file name likhenge, directory ka naam nhi likhenge, kyuki wo by default views naam ki directory search krega. 
            views directory waha pr search hogi , jaha pr code start hua tha.

    if want to run index.js file from outer , jisme agar wo views folder ki file ko render krna chahe to humhe koi dikkat na ho, 
        first we need to import path , 
        then set path for views with help of path.join()
        it set like __dirname , abhi jo file run ho rhi wo directory + /views yani usi directory ka views folder.
        aisa krne se ejs file run hone me koi dikkat nhi aayegi.

    ! interpolation syntax in EJS
    
*/

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname , "/views") ); // a good practice , if we are running our index.js from outer directory

// app.get("/" , (req , res)=>{
//     console.log('this is home');
// })
app.get("/" , (req , res)=>{
    res.render("home.ejs");
})


