const express = require("express");
const app = express();

app.get("/" , () => {
    console.log(" Hi , I am root. ");
})



// Index Routes
app.get("/users" , () => {
    console.log(" User get Route. ");
})
// show user
app.get("/users/:id" , () => {
    console.log(" User get Route. ");
})
// Post user
app.post("/users" , () => {
    console.log(" User post Route. ");
})
// Delete
app.delete("/users/:id" , () => {
    console.log(" ddelete for user ");
})

// Post
// index
app.get("/posts" , () => {
    console.log(" User get Route. ");
})
// show post
app.get("/posts/:id" , () => {
    console.log(" post get Route. ");
})
// Post post
app.post("/posts" , () => {
    console.log(" post post Route. ");
})
// Delete
app.delete("/posts/:id" , () => {
    console.log(" ddelete for post ");
})


app.listen(3000 , () => {
    console.log("Hi, I am root.");
});