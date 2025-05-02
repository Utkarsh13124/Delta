//! SQL Relationships 
/*
 cardinality :- 1 , M , N . 1 
    SQL ( Relationship via Foreign Key ) 
    Foreign Key , connection/ relationship ko establish krta hi. 

    One to One Relationships ( 1 * 1 )
        storing relationship of coultry & their representatives as two tables.



    One to Many Relationships ( 1 * M )
        tabke 1 ka data , table 2 ke multiple data ke saath connected hi.
        Ex :- users &  post , customers & their orders. 



    Many to many Relationships( M * M )
        dono tables ke bhut saare object interrelated ho sakte hi.
        Ex -> student and subject. 

*/

//? We are learning it to make models in Databases.
/*
    Ex - zomato
    suppose we have user , address
        humhe humesha ye sochna chahiye ki jo hum model bna rhe hhi , iske dusre data ka bhi humhe kabhi need pad skta hi.
        user se humhe review lena ho to humhe alag alag msg bhejna padega.
        lekin agar hum address ka model bnwa diye aur rahul ne order kiya to eise thodi na hum alag address pr kuch bhej denge. 

    Eisa nhi ki hr chote data ke liye naya model bna diye , jab us data ko individually use nhi kr sakte.

*/
//! Mongo Relationship
//! One to Many
/*
    Three cases :- 
        depend on many. 
            many -> (2 , 3, 100 , 500)  

            many -> (10^3 * n)

            many -> (10^k * n)


*/


//! one to few 
/*
many < 500 ,1000
    Implementation : - 
        Amazon me hum alag address pr saman mangwate hi , to generally ye address , 1000s ki number me nhi hote. 
        Zomato , Uber , Ola --> me jo hum addresses store krwate hi. 


        * Store the child document inside the parent document.
        
        ex"- {
            id : 
            name :
            addresses : [
                { location : 'kanpur' , city : 'Lucknow'},
                {},
            ],
            __v : 1

        },

    
    ! implementation

*/

//! One to Many / Approach 2 :- > when we have thousands of many for one.
/*
    Like blinkit , Customer placing orders.

    * Store a reference to the child document inside parent. , earlier for few , we are storing them inside parent only.
        reference means pointer , jisse hum kabhi bhi actual tk pahuch sakte hi. 

    we will make customer & order as two different model. & store the id of order into User.
        ref -> customer.js in Models
*/

//! populate method.
/*
    customer.js

*/


//! One to Many Approach  - 3 One to Squillions
/*
    store a reference to the parent document inside the child.
        we are doing opposite of approach  2. 

    Ex : - instagram , Quora. 
        User could have multiple post.
        Eise cases me  hum , user ke liye save krwaye ki uske kitne post hi , usse accha hi , ki hum ye save krwaye ki post ka user kon hi.
*/

















