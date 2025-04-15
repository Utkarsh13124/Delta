const mongoose = require("mongoose");

 //! Thhis line is helping our JS file to connect with Data server of mongoDB
  // address is given there , and mongodb protocol , then localhost , then port no. then DB name
 // *mongoose.connect('mongodb://127.0.0.1:27017/test');
    // connnect humara ek asynchronous function hi 

    async function main() {
      await mongoose.connect('mongodb://127.0.0.1:27017/test');
    
      // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }

    main()
    .then( () => {
        console.log("connection successful")
    } )
    .catch(err => console.log(err));


//! defining schema
    // schema are rules for class/Model , or rules , structure
    // mongoose.Schema method is used
        // dataTypes --> String , Number , Date , Boolean , Mixed , UUID, etc
const userSchema = new mongoose.Schema( {
    name : String,
    email : String,
    age : Number
});

//! Models --> Class --> creating collection in DB, also we are using test DB , as we called him
    /*
        Model in mongoose is a cllass with which we construct documents.
        jo hum collection ka naam dete hi , whi model ka naam dete hi, 
        const modeName = mongoose.model("collection_name" , schema_name);
            * generallly jo collection ka naam pass krte hi, use hum Capital character se start krenge, aur plural nhi rakhenge , 
                kyuki mongooose use plural aur small letters me connvert kr dega. 


    */
   
   
   //! Inserting data in collections like making object for a class
   /*
   * inserting One 
   document ko insert krne se peehle unhe create krna hoga, kuki humne ek model bnaya jo ek class ki tarah hi , aur class ka object hota hi , to humhe ek object matlab mongoose ki language me ek document banani padegi. 
    *hr koi jo hi instance / object , document bnte hi model,class ke , 
      unke pass by default ek save name ka method hota hi.
      jo ki ek promise returrn krta hi, koi bhi cheez agar promise return krti hi , to hum uske end pr kuch kaam krwa sakte hi. 

      Also Mongoose adds an id property to our object.
   
   
   
   
   */
  
  
const User = mongoose.model("User" , userSchema);
// const user2 = new User({
//     name : "Eve",
//     email : "eve@gmail.com",
//     age : 21
// }); // abhi ye database ke ander nhi save hua but memory me save ho gya hi.
    /*
        memory ke ander store hua hi , ise kaise check krenge.
            we will write node in terminal , hum uske repl me jayenge,
             wha likhenge .load index.js  --> loading index.js in repl so we can acess lot of thing there.
              its like hum broeser ke condole.log me print krwake check kr sakte hi.

              here also we notice ki , mongoose ne object ko ek id de di hi. 
    */

// user2.save();// this save data
//     // also returns promise , which on successful , returns saved data.

// user2.save().then( (res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//! inserting multiple data 

User.insertMany([
    {name : "Tony" , email : "tony_gmail" , age : 50},
    {name : "uony" , email : "uony_gmail" , age : 50},
    {name : "Tojy" , email : "tojy_gmail" , age : 50},
]).then( (res => {
    console.log(res);
}))


//! operation buffering
    /*
        jo bhi hum insertion ka code likh rhe hi , ye to logically hunmhe then wale block ke ander likhna chahiye.,
         Mongoose ke ander operation buffering hoti hi , jiski wajah se hum , mongoose ko pehle use krrna start kr sakte hi , before having connection to DB, 
          jab tk hum baki cheee krenge , mongoose connection bna degga. 
    */


//! find 
    /*
         Model.find() 
            

    */






























