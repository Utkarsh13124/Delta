const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(() => console.log("Connnection Successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username : String, 
    email : String,
});

const postSchema = new Schema({
    content : String, 
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref :  "User",
    }
});

const User = mongoose.model("User" , userSchema);
const Post = mongoose.model("Post" , userSchema);

const addData = async () => {
    let user1 = new User({
        username : "utkarsh",
        email : "utkarsh@gmai.com",
    });

    let post1 = new Post({
        content : "hello world!",
        likes : 8,
    });

    post1.user = user1; // as hum object ko refer krte hi , but id hi save krega , as per schema design.

    await user1.save() ; // saving user before.
    await post1.save() ;
}
