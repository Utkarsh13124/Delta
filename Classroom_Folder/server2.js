const express = require("express");
const app = express();
exports.app = app;
const cookieParser = require('cookie-parser')

app.use(cookieParser("secretCode"));

// Import routes
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

// Root route
app.get("/", (req, res) => {
    console.log("Hi, I am root." , req.cookies , req.signedCookies); //! req.signedCookies will varify the tempering
    
    res.send("Welcome to the Index Route.");
});

// get signedCookies
app.get("/getsignedcookies", (req, res) => {
    res.cookie("name" , "nitin" , {signed : true});
    res.cookie("Made-in" , "India" , {signed :  true});
    console.log("Sent you some Cookies.");
    res.send("Welcome to the getCookie Route.");
});
// get Cookies
app.get("/getcookies", (req, res) => {
    
    res.cookie("country" , "India");
    console.log("Sent you some Cookies.");
    res.send("Welcome to the getCookie Route.");
});
// ! greet with cookie
app.get("/greet" , (req, res) =>{
    let {name = "anonymous"}  = req.cookies;
    res.send(`Good Evening , ${name}`);
})

// Mount route modules , Routes is passed as Middleware.
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});