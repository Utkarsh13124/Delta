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
 const User = mongoose.model("User" , userSchema);


 //! Inserting data in collections like making object for a class
    /*
        * inserting One 

        * inserting Many
    
    
    
    
    
    */










































