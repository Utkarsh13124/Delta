/*
    Node.js
        Javascript runtime environment
            ye ek environment hi jiske ander Javascript run kr pata. 
        it is used for server side programiing.

    1. popular. 




    ! Node REPL
        read evaluate print loop


    ! agar hum terminal me node likhe to hum node ke runtime environment me enter kr jayege, which is just like browser console window , which is also a run time environment.
        yaha pr DOM apne aap nhi create hoga , jaise browser me html ke liye bn jata hi , because node is just for JS.
        but yaha pr global object hota hi jo usi ke equivalent hi.

        .help for help in node
        ctrl C Ctrl C or .exit is used for exit.


    ! Node Files
        node script.js
            for runinng a file in terminal , like VSCODE terminal , but ensure that you are in that terminal.




    ! Process
        a object in Node.js

        provides information about current Node.js process

    process.argv  --> specail method inside process object.

        returns list of argument passed when node is launced. 
        2 values default jati hi when we run any file -> first is executable path for node , second is current path



    !Export in files 
        ek js file ke function  ko dusri file me kaise use krein

        1. jis  file ke function ko bhejna hi , usme 
            module.export = jo_bhejna_hi;
                module.export ek empty object hi. , jo explicitly kuch aur form bhi de sakte hi
        
        2. jis me accept krna hi , usme 
            const someValue = require("./math");
                require ke ander pehli wali file ka relative path likhna hoga.



        ! sometime deleting and copying and pasting works if the error is due to hidden character. because on pasting we cant paste hidden character.


    !Export in directory 
        Just like c++ , & java me main function humara entry point hota hi , thik waise hi directory me index.js humara entry point hota hi.

        hum need file ko usi directory ke index file me export krke wha pr array me sabko store krenge phir use export krenge 
        ab hum jaha pr humhe export krna tha wha pr require folder ki relative location dekhenge.
            require apne aap folder ke ander index.js file se milke exports ko receive kr lega. 







        */  