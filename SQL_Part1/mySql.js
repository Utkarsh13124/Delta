/*
    ! creating new connection in mYsql 
        click on plus icon , add name , & pass


*/

/*
    SQL is case insensitive
    ! our first database 
      A clg database of Student & teacher

        To create a DB
            CREATE DATABASE college;

        To delete a DB
            DROP DATABASE db_name;

    ! to create a table in DB
        we need to specify the DB where we want to create a table, as we may have multiple DB like student , teacher, etc,

            USE db_name; // specifying the DB

        CREATE TABLE tabble_name( // columns are schema
            column_name1 dataType constraint(optional),
            column_name2 dataType constraint(optional),
            column_name3 dataType constraint(optional)
        );


*/

/*
    ? Database queries

        1. CREATE DATABASE college;
                CREATE DATABASE IF NOT EXISTS college;

        2. DROP DATABASE college;
            DROP DATABASE IF EXISTS college;

        3. SHOW DATABASES
            ek point pr DB ke ander kitne database hi like , teacher , instagram , student , etc.

            This can also use //! to show table
                USE db_name;
                SHOW TABLES;
        
*/

/*
    ! Table Commands
        1. CREATE 
            - define the schema of TABLE

            CREATE TABLE table_name( // columns are schema
                column_name1 dataType constraint(optional),
                column_name2 dataType constraint(optional),
                column_name3 dataType constraint(optional)
            );

                ! DataType
                    CHAR -> fixed length
                        name CHAR(5)
                            OM , 3 memory wasted.
                    VARCHAR -> variable CHAR
                            OM , 3 memory not wasted.
                        maximum 255 character can be stored.

                    INT 

                        UNSIGNED :- 
                            TINYINT -128 , 127
                            UNSIGNED TINYINT  0 , 255
                                means agar humhe pata hi ki number humara positive hoga , aur humhe 1 - 200 tk number store krane hi , 
                                    to instead of using int , we can use unsigned  Tinyint
            
            ! What are Constraints? 
                Rules for data in the table

                    few Imp are
                        1. NOT NULL 
                            columns ccannot have null value. 
                        2. UNIQUE
                            columns should have unique value.
                        3. DEFAULT
                            sets the default value of a column
                            - like salry ko deffault set krna , followers ko default 0 set krna
                        4. CHECK
                            it can limit the values allowed in a column
                            - like sabka age 13 se upar hona chahiye. 

                       ! 5. PRIMARY KEY
                            makes a column unique & not NULL but used for one or set of column.
                               First Way
                                CREATE TABLE temp(
                                    id INT PRIMARY KEY,
                                    ..other
                                ) 
                               Second way --> last me alag se batana
                                CREATE TABLE temp(
                                    id INT,
                                    ..ohers,
                                    PRIMARY KEY(id)
                                )
                            set of PRIMARY KEY(id , name);

                    ! 6. Foreign KEY
                        prevent action that would destroy links between tables
                        a column which is PRIMARY KEY in some other table.

                        CREATE TABLE temp (
                            cust_id int,
                            FOREIGN KEY (cust_id) references customer(id)
                        );
                    

! to see a ER diagram CTRL + R




*/


//! WHAT are keys?
/*
    Primary Key :- unique to a table , and not null. 
        it is a column (or set of columns) in a table that uniquely identifies each row. 


    Foreign Key :- 
        could be multiple foreign key, not unique --> multiple column 
        FKs can have duplicate & Null values
        
*/


//! Table queries
/*
    * Order is very important
        insert into table_name
        (colname1, colname2)
        VALUES
        (COL1_v1, COL2_V1),
        (COL1_v2, COL2_V2);
*/

//! SELECT command
/*
    Selects & Show data from the DB

    1. SELECT col1, col2 FROM table_name;
        !1.1 DISTINCT
            SELECT DISTINCT age FROM user;
                like users ke pass common ages hi , and we want a unique agees to come.

    2. to show all
        SELECTS * FROM table_name;
*/

// ------------------------------------------------------------------------------------------
//* SQL 2

//! WHERE CLAUSE
    /*
        To define some conditions

            SELECT name , followers
            FROM user
            WHERE followers >= 200;


    ! OPERATORS in WHERE
        ARITHMETIC +-
        COMPARISION != 
        LOGICAL AND,OR
        BITWISE MANIPULATION | &
    */

   //! LOGICAL operator FREQUENTLY used
   /*
    AND checks both condition are correct. 
        WHERE age < 18 && followers > 200
    OR check one condition for true

    BETWEEN ( selects for a given range )
        ? users with 16-17
        WHERE age BETWEEN 16 AND 17

    IN (matches any value in the list)
        we have list , and we match
        like we want a list which have _ _ emails.

        WHERE email in ("xyz@email" , "uvw@email");

    NOT ( to negate the condtion)
   */


//! LIMIT clause
    // sets an upper limit on mumber of tuples (rows) return by the DB
 //   LIMIT 5;


 //! ORDER BY CLAUSE
    /*
        * TO sort in ascending (ASC) or descending order(DESC)

    SELECT col1 , col2 , FROM table_name
    ORDER BY col_names ASC;

    by default sorting happen in ascending order. 
    */

//! Aggregate functions
    /*
        performs a calculation on a set of values , and return a single value
        COUNT() , MAX() , MIN() , SUM() , AVG()
        (_col_name_)
    */

//! GROUP BY CLAUSE
    /*
        GROUPS rows that have the same values into summary rows.
        it collects data from multiple records and groups the result by one or more column

        * Generally we use group bby with some aggregation function
    
            suppose we want to found the count of user based on their group. 

            ? group by ka use krke hum group bnate hi , and then us group me kuch kaam krane ke liye aggregate function ka use krte hi
            ? aggregate function ke bahar hum usi column ka naam rakh sakte hi, jo aggregate function me hi
            SELECT name , age , MAX(followers)
            FROM user
            GROUP BY age; 
                -> will give error , hum sirf unhi column ko selects kr sakte hi jinhe humne group by kiya hi
    */

//! Having Clause
/*
    similar to WHERE( apply some condition on rows)
   But it is used when we want to apply any CONDITION AFTER GROUPING

   WHERE is for TABLE 
   HAVING is for GROUP
   Grouping is necessary for HAVING
    SELECT age , MAX(followers)
    FROM user
    GROUP BY age
    HAVING max(followers) > 200; 

*/

//! GENERAL ORDER
/*
    SELECT column(s)
    FROM table_name
    JOIN ___ on __
    WHERE condition
    GROUP BY column(s)
    HAVING condition
    ORDER BY coulmn(s) ASC
    LIMIT cnt;
*/


//! UPDATE ROW - TABLE QUERY
    /*
        Update ( to update existing rows)

            UPDATE table_name
            SET col1 = val1 , col2 = val2
            WHERE condition;

        When we do update first time , we get Safe_update error
            SET SQL_SAFE_UPDATES = 0; // run this command
    */

//! DELETE ROW - Table Query
/*
    DELETE FROM table_name
    WHERE condition;

    ! if we not write the where condition it will delete all row.
*/


//! ALTER - Table Query
/*
    To change column data , name , dataType, constraint , add , delete

    ADD Column  -> new column
        ALTER TABLE table_name
        ADD COLUMN new_column_name datatype constraint;


    DROP Column -> to delete a column
        ALTER TABLE table_name
        DROP COLUMN column_name;


    RENAME Table
        ALTER TABLE table_name
        RENAME TO new_table_name;
    
    CHANGE Column -> change name or datatype or constraints
        ALTER TABLE table_name
        CHANGE COLUMN old_name new_name new_datatype new_constraint;
            ! agar humhe kuch bhi change krna hi to saari detail dobara dalni padegi
                for ex , agar naam change kr rhe hi , tab bhi humhe old datatype and constraint likhne honge.  


    Modify Column( modify datatype / constrain )
        ALTER TABLE table_name
        MODIFY col_name newDataType new_constraint;


    Truncate (to delete table's data)
        delete data not table

        TRUNCATE TABLE user;





        
*/  