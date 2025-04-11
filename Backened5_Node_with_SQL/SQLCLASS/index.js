//! faker is used to create fake data
const { faker } = require('@faker-js/faker');  
const mysql = require('mysql2');

// Create the connection to database
    // query method is inside it. 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',  // changing name as per our database
    password :  'MySQL@131203'
  });



// //! to estable a connection
let q1 = "SHOW TABLES";

try {
    connection.query(q1 , (err , result)=>{ // err , result , field 3 parameters in callback , field parameter is for SELECT
            // ressult is array of object
        if(err) throw err;
        console.log("result" , result);
     } );       
} catch (err) {
    console.log(err);
}
    // connection.end();

 //! mysql2 package is used to connect with databases.



//! insert new data into table
let q2 = "INSERT INTO user (id , username , email , password) VALUES (? , ?, ?, ?)";
let user = ["123" , "123_newuser" , "abc@gmail.com" , "abc"];
    try {
        connection.query(q2 , user ,  (err , result)=>{ // err , result , field 3 parameters in callback , field parameter is for SELECT
                // result is array of object
            if(err) throw err;
            console.log("result" , result);
        } );       
    } catch (err) {
        console.log(err);
    }
    connection.end();

//! Insertion query for multiple data
let q3 = "INSERT INTO user (id , username , email , password) VALUES ?"; //  * Single ? is needed each for 1 array
const users = [  
    ['001', 'user_one', 'userone@example.com', 'User One'],  
    ['002', 'user_two', 'usertwo@example.com', 'User Two'],  
    ['003', 'user_three', 'userthree@example.com', 'User Three'],  
    ['004', 'user_four', 'userfour@example.com', 'User Four'],  
    ['005', 'user_five', 'userfive@example.com', 'User Five']  
  ];  
  try {
    connection.query(q3 , [users] ,  (err , result)=>{  //* for multiple data second parameter would be [in_bracket]
            // ressult is array of object
        if(err) throw err;
        console.log("result" , result);
     } );       
} catch (err) {
    console.log(err);
}
    connection.end();


//! Using data in BULK using FAKER
 const getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password()
    ];
  }

//   console.log("Get:" , getRandomUser());
let data = [];
for(let i = 0 ; i < 5 ; i++){
    data.push(getRandomUser());
}

    //* now we can use above query to insert the data in bulk