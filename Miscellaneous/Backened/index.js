const express = require("express");
const app = express();
const port = 3000;

// this line we use to parse request body , when we use post request.
// it is an standard line. 
    // it is saying ki agar humara data url encoded form me aa rha hi to humara express use samajh le.
    app.use(express.urlencoded({ extended : true }));
    app.use(express.json()); // ab humara code json data se bhi post request body ki value fetch kr payega. 

app.listen( port , ()=>{
    console.log(`listening on port : ${port}`);
});

app.get( "/register" , (req , res) => {
    let { user , password } = req.query;
    res.send(`Standard Get Reaponse . Welcome ${user}`);
});

/*
    hum post request ke ander body me data send kr sakte hi , jo url me nhi dikhegi , but backened me server pr dikhegi, 
    hopscotch me post ke saath body ka option rehta hi.

    !handling post request
        post request me kaise request body ke ander data bheje ya fetch kre, jaise get me req.query  se krte hi.
        req ke ander body naam se ek object hota hi , jiski help se hum krte hi.

        this line we need to write in our program.
        app.use(express.urlencoded({ extended : true }));
*/
app.post( "/register" , (req , res) => {
    let { user , password } = req.body; //! yaha pr hum apne data ko databases ke ander bhi store kra sakte hi.
    res.send(`Standard Get Reaponse . Welcome ${user}`);
});