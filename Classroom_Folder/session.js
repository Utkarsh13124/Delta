const express = require("express");
const app = express();
// Import routes
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const session = require("express-session");

const sessionOptions = {secret : "mysupersecretstring" , resave : false , saveUninitialized : true};

app.use(session(sessionOptions)); // as thi is middleware , so writng at top.
// hr ek request ke saath -> ab ek session id in the form of cookie , session ke ander jaake save ho jayegi.

// app.get("/test" , (req , res) => {
//     res.send("test successful");
// })

app.get("/reqcount" , (req , res) => {
    if(req.session.count) req.session.count++;
    else req.session.count = 1 ; // created new variable in request.session
    console.log(`You sent a request ${req.session.count} times`);
})

app.listen(3000 , () => {
    console.log("Hi, I am root.");
});