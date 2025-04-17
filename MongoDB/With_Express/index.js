const express = require("express");
const app = express();

const path = require("path");
app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");

const mongoose = require("mongoose");
main().then(res => console.log("Connection Successful") ).catch( err => console.log(err));
 async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}




app.listen(8080 , () => {
    console.log("Server is started.");
})

app.get("/" , (req , res) => {
    res.send("Root is working.");
});

//! creating our model chat
/*
    chat will have : _id , from ,to , msg , created_at


    Routes :- 
        /chats
            update , delete , 

    * Dev idea, abhi tk to hum apne index.js me hi schema bna rhe  the, but in real life many schema ho sakte hi , to index.js ke ander hi banayege to file bhut badi ho jayegi. 
            to hum ek Schema desiging ke liye ek models naam ka folder banayege
            as moongosse ke models hi , database ke ander collection bnte hi.
                like yaha bhi chats , user, gallery  , etc mdel bna sakte hi.
        models folder me hum chat chema design kiye and use export kr liye
         module.exports = Chat;

        * Date() object give some random , date and time
            new Date()



 */
 const Chat = require("./models/chat.js");
 let chat1 = new Chat({
    from : "neha",
    to : "priya",
    msg : "Send me your exam sheets",
    created_at : new Date(),
    message : "This msg will not be saved in DB as humne message ke liye koi schema design nhi kiya hi."
 });

 chat1.save().then( res => console.log(res)).catch( err => console.log(err));





 //! initialize databse
 /*
    we will make init.js file where we run our ccode for initialization of sample databases.
        do connection with database from init.js file run the file. 
        kabhi aage bhi data dalna ho to ise use kr sakte hi.
 */

//! index Route
/*
 Show all chats. 
*/

app.get("/chats" , async (req , res) => {
    let chats = await Chat.find();
    console.log(chats);
    // res.send("working.");
    res. render("index.ejs" , {chats});
});




