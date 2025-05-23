const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,
        required : true
    },
    msg : {
        type : String,
        maxLength : 2000
    },
    created_at : {
        type : Date,
        required : true
    },
});

const Chat = mongoose.model("chat" , chatSchema);

// this line is exporting the Chat  model
module.exports = Chat;