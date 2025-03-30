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
        refers to embedding js expressions into marked up text
        we make our html dynamic.
        documentations at ejs.co
            for output
                <%= 1 + 2   %> 
                    this will be output 3


        sending data of database for rendering
        !passing data to EJS
            we make object and pass it as second argument , in res.render().
            and in EJS file we can use it by its key.



    
*/

app.set("view engine" , "ejs");
app.set("views", path.join(__dirname , "/views") ); // a good practice , if we are running our index.js from outer directory

// app.get("/" , (req , res)=>{
//     console.log('this is home');
// })
app.get("/" , (req , res)=>{
    res.render("home.ejs");
})


app.get("/rolldice" , (req, res) =>{
    let diceVal = Math.floor(Math.random() * 6) + 1; // assuming this data has come from DB
    // all line works below, we can keep key and value as same name , then we not need to write both thing.
        // res.render("rolldice.ejs" , { num : diceVal}); 
        // res.render("rolldice.ejs" , { diceVal : diceVal});
        res.render("rolldice.ejs" , { diceVal });
})

// //! Instagram EJS :- a small activity
// app.get("/ig/:username" , (req , res) => {
//     let {username} = req.params;
//     res.render("instagram.ejs" , { username });
// })

//! Consitional Statement in EJS
/*
    <% %> for conditionals
        look for exaple in rolldice
*/

//! loops in EJS :- print name of followers for a user
//! Instagram EJS :- a small activity
// app.get("/ig/:username" , (req , res) => {
//     let {username} = req.params;
//     const followers = ["adam" , "bob" , "charlie" , "donald" , "eve" , "steve"]; // assume data receieved from DB
//     res.render("instagram.ejs" , { username , followers});
// })


//! using database for instagram page
// firstly we need to require it.
app.get("/ig/:username" , (req , res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    // console.log(instaData);
    let data =  instaData[username] 
    console.log(data);
    // const followers = ["adam" , "bob" , "charlie" , "donald" , "eve" , "steve"]; // assume data receieved from DB
    res.render("instagram.ejs" , { data }); // sending data of username from received data from database.
})

