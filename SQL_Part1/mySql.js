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

            CREATE TABLE tabble_name( // columns are schema
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