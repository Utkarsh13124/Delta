const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(res => console.log("Connection Successful") ).catch( err => console.log(err));
 async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Sanskar",
        to: "Akshat",
        msg: "Send me your score.",
        created_at: new Date(),
    },
    {
        from: "Ravi",
        to: "Pooja",
        msg: "Meeting at 5 PM.",
        created_at: new Date(),
    },
    {
        from: "Anjali",
        to: "Rahul",
        msg: "Please review the notes.",
        created_at: new Date(),
    },
    {
        from: "Tina",
        to: "Suresh",
        msg: "Lunch tomorrow?",
        created_at: new Date(),
    },
    {
        from: "Mohit",
        to: "Deepa",
        msg: "Happy Birthday!",
        created_at: new Date(),
    },
];
 
Chat.insertMany(allChats)
.then(res => console.log("Chats inserted:", res))
.catch(err => console.log(err));

