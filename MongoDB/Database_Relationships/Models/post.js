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
const Post = mongoose.model("Post" , postSchema);



const addData = async () => {
    // let user1 = new User({ commenting to prevent again insertion.
    //     username : "utkarsh",
    //     email : "utkarsh@gmai.com",
    // });

    let user = await User.findOne({username : "utkarsh"});
    

    let post2 = new Post({
        content : "Bye Bye , 2!",
        likes : 89,
    });

    post2.user = user; // as hum object ko refer krte hi , but id hi save krega , as per schema design.

    // await user1.save() ; // saving user before.
    // await post1.save() ;
    await post2.save() ;
}

// addData();

const getData = async() => {
    // let res =  await Post.findOne({}).populate("user"); // jis cheez ko hum print krwana chahte hi, jis property ko . 
    let res =  await Post.findOne({}).populate("user" , "username"); // specifically printing username for user, as we not want to print all other details.
    console.log(res);
};

getData();




// const deletePostById = async (postId) => {
//     try {
//       const result = await Post.findByIdAndDelete(postId);
//       if (result) {
//         console.log(`Post with ID ${postId} has been deleted.`);
//       } else {
//         console.log(`Post with ID ${postId} not found.`);
//       }
//     } catch (err) {
//       console.error('Error deleting post:', err);
//     }
//   };

//  deletePostById('68148871a9e4e3c62987edac');