const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(() => console.log("Connnection Successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

//! Implementation of 1 - Few ( user -> address ) , 
// another possible implementation for 1 - few , is we make a model for addresses , and use hum embed krwa le Users model me. 
 // Aim is to store address insode user.

// - Defining schema
const userSchema = new Schema({
    username : String, 
    addresses : [
        {
            _id : false, // ab address ko automatically document samjh kr use id nhi dega. 
            location : String,
            city : String,
        },
    ],
});

// - making model for schema.
    //! Mongo db will automaticaaly assume address as document and create id for it.
const User = mongoose.model("User" , userSchema);

const addUsers = async() => {
    let user1 = new User({
        username : "sherlockholmes",
        addresses : [{
            location : "221B Baker Street",
            city : "London"
        }]
    })
    user1.addresses.push( { location : "P32 Wallstreet" , city : "London" });

    let result = await user1.save();
    console.log(result);
};

addUsers();