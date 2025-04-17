const mongoose = require("mongoose");

main()
    .then( () => {
        console.log("Connection Successful.");
    })
    .catch( (err) => console.log(err));

async function main(){
      await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

/* ! Schema Validation
    naya collection define krne se pehle uska scema define krna hota hi.
        title : String this is also a constrain , where we are emphasis to put only string
        ! above is also a shortform

SchemaType Option
    Required = Not NULL 
    unique 
    minLength , maxLength , lowercase , uppercase for String
    default
    immutable --> not change if declared by this
    enum : [ " red " , [ "Blue" ]]  so they are only possible value are red and blur
    

*/

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true, // this is NOT NULL , it needs to be filled.
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : 1,
    },
    discount : {
        type : Number ,// even string me bhi number bhejenge , wo bhi fine hi , kyuki wo cast ki ja sakti  hi number me.
        default : 0,
    },
    category : {
        type : String,
        enum : ["fiction" , "non-fiction"]
    },
    genre : [String], // it could store array of string

});

//! creating collection
const Book = mongoose.model("Book" , bookSchema);

let book1 = new Book({
    title : "Science XII",
    autor : "RD Sharma",
    price : 1200,
    category : "fiction",
    genre : ["Action" , "Adventure"]
});
book1.save()
 .then( res => console.log(res))
 .catch( err => console.log(err));




//! Scema Validation with update

/*
    jo rule humne upar define kiye hi , ye saare 

    ! if we wnat ki update ke samay bhi , hum check krein 
    to humhe update krte ssamay usme ,run validators true pass krna hoga in option
    ! defining custom error 
     define in array from along with validations
      ex - if price is less than min , then show the erro
        price : {
            type : Number,
            min : [1 , "Price is to low for seling"], 
        }
        ? acessing exact error
         console.log(err.errors.category.properties.message)
           console.log(err.errors.price.properties.message)
*/

Book.findByIdAndUpdate("6800d84eef98e06795ee57d2" , {price : -100 }, {runValidators}) ;
 // find with id and update the price and also validate while updating ,








