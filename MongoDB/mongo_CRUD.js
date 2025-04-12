//! command
/*
    mongosh    --> to start mongoo shell

        ctrl k    ---> to clear the screen
        help command --> prompt all command.
    

    to check in which db we are
        db

    to create & use a new database 
        use _db_name_ 
            create if not exist , & use .

    ! also on creating database with use command, it will not show in show databases , because abhi humne iska memory me commit nhi kiya hi.
        for commiting add some documents to it.


    show collections
        show tables in sql
*/      

/*
    a non sql data base
    
    mongo shell :- is like cli jisme hum apna DB run kr payenge.
        we use to perform CRUD operation

        humhe test visible hota hi. 
            wo ek temoporary databse hi jise mongodb ne create kiya hi, 
            & when we do show databases 
            tab wo visible nhi hota hi, kyuki wo ek temporary database hi. 


*/


/*  ! BSON data
    Binary JSON

    JSON have some issue.
        1. text based data
            parsing is tough
        2. space inefficient
        3. less data types


*/

/*
    ! Document & Collection
        Document :- Mongo  stores data in form of documents
            rows in sql , stores individual data.
        Collection :- MongoDB stores document in collections.
            tables in SQL

*/

/* CRUD -> C --> Insert
    ! INSERT in DB , showing all document

        ?insert one
            inserting data creates new ccollection. 

            db.collection.insertone()
                insert a single document into a collection

                ex- store some data in Student collection
                    db.student.insertone({ name : "adam" , marks : 70})
                    when we insert document(rows) then mongodb gives them a id , which is automatically becomes primary key of this. 

        ? insertMany
            db.student.insertMany( [ { name : "adam" , marks : 70}, { name : "adam" , marks : 70} ]);

*/
/*
!   CRUD --> R -> find()
    ?db.collection_name.find()  // return everything
        shows all documents inside it. 

    ! imp differeence in mysql & mongodb
        yaha pr eisa nhi hi ki ek me age de diya to sabme age dena padega. 
        next me city bhi de sakte hi
      matlab yaha pr hum schema na bnaye to koi fark nhi padta hi. 
      jaise sql me pehle scehma banana hota tha, aur jab koi naya data dalo to pehle uska scema creata krna hota hi.


* for specific query multiple condition or single condition
    ?db.collection_name.find( { key : value , key2 : value2 } ) 
        return cursor , reference to original 
            why find() is returning a cursor?
                jisse agar jyada data aa jaye to hum us pr traverse kr sake , loop kr sake 
        notice brakets
        [
            {
                _id: ObjectId('67fa3576b64afc5af0b5f899'),
                name: 'adam',
                age: 90,
                marks: 88
            }
        ]
    ?db.collection_name.findOne( { key : value } ) 
        return actual document
        {
            _id: ObjectId('67fa3576b64afc5af0b5f899'),
            name: 'adam',
            age: 90,
            marks: 88
        }
*/

/*
    Find in DB 
        ! Query operator  https://www.mongodb.com/docs/manual/reference/operator/query/
            * Comparision Operator

             gt , gte , lt , lte
                    Find students where marks > 75 ::  ---> We will write our condition in key value pair
                        db.student.find( {marks : {$gt : 75}} );

                    Find students where marks > 75
                        db.student.find( {marks : {$lt : 75}} );


             in ==> find student who live in Delhi or Mumbai
                values are case sensitive
                db.student.find( {city : {$in : ["Delhi" , "Mumbai"] } } ) 

         Logical operator 
            {$opr : [_list of Condition { age : {$gt : 18} } , { city : "Delhi" } ] }
             two condition mixed
                Find students who scored > 75 or live in Delhi
                 OR operator , 
                    or ko key ki tarah , and other things are in pair of value 
                    db.student.find( {$or : [{marks : {$gt : 75}} , {city : "Delhi" }]) 

 */

//! CRUD :: U --> updateOne
    /*
      update Operator 
        set operator --> existing field ko update krna
        addField --> add field , like city add krna ho
        more exist, as per need refer document.
        
        
        
        
      updateOne
        --> update a single document based on the ffilter
        db.collection.updateOne(<filter> , <update> , <options> )
            filter => some condition 
            update => the update
            option ==> some other coondtions to sent along with them. mostly above two are sent in method

            ex : - update marks of student name adam
                db.student.updateOne( {name : "adam"} , {$set : {marks : 99}}) 
    

      updateMany
            db.student.updateMany( {city : "delhi"} , {$set : {city : "New Delhi"}}) 

      replaceOne 
        replace a document with new one
         as hum replace kr rhe hi , to id nhi change hogi
            db.student.replaceOne( {name : "bob"} , {name : "shraddha" , marks : 97 , state : "haryana"}) 


    */


//! Nesting (object ke ander object) and we need to find based on properties of inner object
/*
    {
        _id : ObjectId("shf4232039i9ijdn09-3-3"),
        name : farah,
        performance : {marks : 88 , grade : 'A'}
    }
    
    ? Suppose we need to search for student who have marks 88
      write key in "inside string" with dot operator to traverse inside object.
        db.student.find( { "performance.marks" : 88} ) 


*/

//! Delete in DB
/*
    ?deleteOne
        db.collection.deleteOne( <filter> , <options> )
          db.collection.deleteOne( {state : "Haryana"} )

    ?deleteMany
        db.student.deleteMany( { marks: {$lt : 75} })

        *based on two condition
            db.collection.deleteMany({
                $and: [
                    { condition1 },
                    { condition2 }
                ]
            })

        * to delete all
            db.student.deleteMany( {} );

    
    ?db.dropDatabase()
        to delte whole database
    
*/