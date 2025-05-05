const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const session = require("express-session");
const flash = require("connect-flash"); // to pop a msg
const path = require("path");
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));


const sessionOptions = {secret : "mysupersecretstring" , resave : false , saveUninitialized : true};

app.use((req , res , next) => {
    res.locals.successMsg = req.flash('success'); // ab messages ko page.ejs me render hone ke baad use kr sakte hi.
    res.locals.errorMsg = req.flash('error');
    next();
})

app.use(session(sessionOptions)); // as thi is middleware , so writng at top.
app.use(flash());
// hr ek request ke saath -> ab ek session id in the form of cookie , session ke ander jaake save ho jayegi.

// app.get("/test" , (req , res) => {
//     res.send("test successful");
// })

app.get("/register" , (req , res) => {
    let {name = "anonymous"} = req.query;
    req.session.name = name; //! storing some value in session
    // console.log(name);
    if(name !== "anonymous" )req.flash("success" , "User registered Successful."); // key - value will be passed, key is used in parsing
    else req.flash("error" , "some error occured"); // key - value will be passed, key is used in parsing
    res.redirect("/hello");
})

app.get("/hello" , (req , res) => {
    // res.send(`hello ${req.session.name}`); //! Using stored session value
    // console.log(req.flash('success')); // parsing msgg of success key in req.flash()
    // res.locals.successMsg = req.flash('success'); // ab messages ko page.ejs me render hone ke baad use kr sakte hi.
    // res.locals.errorMsg = req.flash('error'); // ab messages ko page.ejs me render hone ke baad use kr sakte hi.
        // res locals is used to send the variables.
    res.render("page.ejs" , {name : req.session.name } ); // FLASH KA MSG EK BAAR HI FLASH KREGA . 
})


app.get("/reqcount" , (req , res) => {
    if(req.session.count) req.session.count++;
    else req.session.count = 1 ; // created new variable in request.session
    console.log(`You sent a request ${req.session.count} times`);
})

app.listen(3000 , () => {
    console.log("Hi, I am root.");
});