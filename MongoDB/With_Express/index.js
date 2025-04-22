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

// to use static files like css
    // humhe  express static ko batana padega ki humari files kaha se serve ho rhi hi.
    app.use(express.static(path.join(__dirname, 'public')));  

//! for pasing Post data
    app.use(express.urlencoded({ extended : true })) ;


//! method-overwrite
    const methodOverwrite = require("method-override");
    app.use(methodOverwrite("_method"));

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

//  chat1.save().then( res => console.log(res)).catch( err => console.log(err));





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
    // console.log(chats);
    // res.send("working.");
    res. render("index.ejs" , {chats});
});


// ! new & create route
/*
    1. part :- add button
        <form action="/chats/new" method="get">
            <button>New Chat</button>
        </form>

    2. send a request at chats/new --> render a form (message & chat)

    3. rendered at /chats ( in backend we insert data into DB)


*/

    app.get("/chats/new" , (req , res) => {
        res.render("new");
    })

    //Create route
    app.post("/chats" , (req , res) => {
        let { from , to , msg} = req.body; // but for post request we need to parse the data.
        let newChat = new Chat({
            from : from, 
            to : to ,
            msg : msg,
            created_at : new Date()
        });
        // console.log(newChat);
       // Db ke ander koi bhi operation krna ek asynchronous process hi.
        newChat.save().then( res => console.log("chat  was saved")).catch( err => console.log(err));
        // res.send("working");
        res.redirect("/chats")
    })

    //* edit route
    /*
        1. edit btn :-    edit route open, display a form , we edit msg there , 
        2. send put request and redirect to page. 
    
    
    */  
    // either then catch use , or async and await is used in Db operation
    //! Edit route
        app.get("/chats/:id/edit" , async (req, res) => {
            // console.log("Hello");
            let {id} = req.params;
            let chat = await Chat.findById(id);
            // try {  
            //     let chat = await Chat.findById(id); // Fetch the chat from the database  
        
            //     if (!chat) {  
            //         console.error(`Chat not found with ID: ${id}`); // Log the error  
            //         return res.status(404).send('Chat not found'); // Send a 404 response  
            //     }  
        
            //     res.render("edit.ejs", { chat }); // Render the edit view with the chat data  
            // } catch (error) {  
            //     // Log any unexpected errors  
            //     console.error('Error fetching chat:', error);  
            //     return res.status(500).send('An error occurred while fetching the chat');  
            // }  

            res.render("edit.ejs" , {chat});
        })

    //! npm i method-override
    // ! Put request Update 
    app.put("/chats/:id" , async (req , res) => {
        let { id } = req.params;
        let { msg : newMsg } = req.body;
        // console.log(newMsg);
        let updatedChat = await Chat.findByIdAndUpdate(
            id , 
            { msg : newMsg},
            {runValidators : true , new : true} // new is returns the updated document, and it is saved in variable.
        );
        // console.log(updatedChat);
        res.redirect("/chats");
    });

//! Delete Destroy route
/*
    btn delete
*/
    app.delete("/chats/:id" , async (req , res) => {
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    }) 
