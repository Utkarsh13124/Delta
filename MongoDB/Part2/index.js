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
         Model.find( {_condition_} ) // returns a query object(thennable)
           Mongoose queries are not promise , but they have a .then()
 ?           returns a query object, but not a promise
                * but fir bhi hum usme .then() method laga sakte hi. 

        User.find({})
        User.find({ age : {$gt : 47} })
    ! findOne
        returns exactly one. 
        User.findOne( { _id : "123" })

        ? as id is very much  used to perform vrious operation 
        so in Mongoose , there is especail method about it. 

    */

    // User.find({})
     
    User.find({ age : {$gt : 47} })
        .then( (res) => {
            console.log(res); // res is array of object on console we see, 
                // so res[0] is a object , res[0].name 
        })
        .catch( (err) => {
            console.log(err);
        })

    
User.findById("67fded205f308debfee5122a")
.then( (res) => {
    console.log(res); 
})
.catch( (err) => {
    console.log(err);
})

//! Update 
/*
Returns a Query object.
    updateOne
        User.updateOne({name : "Bruce"} , {age : 59})
         updating age with 59 , where name is Bruce, yaha  humhe set operator ko use krna ka jaroorat nhi hi. 

    updateMany

     also they return meta data like this, if we need to find the updated value together. then we have othermethods
     {
        acknowledged: true,
        modifiedCount: 0,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 0
    }
*/

User.updateOne({name : "Bruce"} , {age : 59})
.then( (res) => console.log(res))
.catch( (err) => console.log(err) );


//! find and update
/*  
    findOneAndUpdate
        this actually print the  data but old value
        for printing new value , we need to send option together
         new option need to send which is defaultly false , set to true and send

    findByIdAndUpdate
*/
//? if new is true , then it returns themodified value.
User.findOneAndUpdate({name : "Bruce"} , {age : 80} , {new : true})
.then( (res) => console.log(res))
.catch( (err) => console.log(err) );


//! deleteOne and deletemany
/*
    returns a queryObject
     filter is passed based on which the value is deleted.
*/

User.deleteOne( {name : "Bruce"})
.then( (res) => console.log(res))
.catch( (res) => console.log(res));

User.deleteMany( {age : 48})
.then( (res) => console.log(res))
.catch( (res) => console.log(res));


//! findByIdAndDelete , findOneAndDelete
 //? it also print the deleted value
User.findByIdAndDelete("68008c099a4b13dc1750e3e0")
.then( (res) => console.log(res))
.catch( (res) => console.log(res));


//! Schema Validations ==> rules for Schema validation
/*



*/




