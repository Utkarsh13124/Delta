/*
    !Faker package
        to generate fake data.
        https://www.npmjs.com/package/@faker-js/faker 
*/

//! MySQL package
/*
    To connect Node withMySQL

    !MySQL2 package we use
        it is a package to connect with database
        we are not using mysql package, as we may face many errors in that

2 ways to connect -> connection.query() & CLI 
    Create connection
        with help of documentation
            https://sidorares.github.io/node-mysql2/docs#first-query
                now etablishing connection
                using query method.

        On first time connect hone me dikkat ho sakta hi, 
            we have to edit some environment variables do them with GPT
         !   mysql -u root -p
                then enter password.
                ctrl D for quiting or type quit
        on creating connection , we have to close it else it will continously running in vscode terminal

    *    3rd way to run SQL  --> generally used to run big SQL files.
            create a file name schema.sql
            enter in mysql environment 
                source schema.sql
*/      

/*
    Create Table 
        we have multiple option we will be using schema file option
*/

/*
    insert into SQL
        we will use Placeholder.
            sending variables, jinhe hum dynamically baad me use krna chahte ho.

        let q = "INSERT INTO user (id , username , email , password) VALUES (? , ?, ?, ?)";
*/



//! Now we will practice for routing like we do earlier , but know this time , we fetch data from SQL
    /* we have users data. 
        get     / -> show no of user in DB
        get / user  -> show users( email , id , username ) ejs
        patch /user/:id     -> username edit

        POST / user -> add new user
        DELETE /user/:id -> user delete , before deleting password should be ask.
    
    */

//! Home Route
/*
    set up express. & UUID 

*/