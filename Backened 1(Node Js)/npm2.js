/*
Remember Backened_2 naam se folder bnao , nhi to init krne me dikkat hoti  , phir jab ander folder bn jate hi , dependencies and path hote hi, tab update krne me dikkat hoti hi.
    npm is library of package like react.js , express.js
        package kisi aur ka likha hua ek code hota hi , jise hum use kr sakte hi.
    
 
    npm is a command line tool , jisse humhe konsa version use krna hum wo bhi control kr sakte hi.
    npm is the standard package manager for Node.js



    ! installing packages
        for ex :- lets install figlet package.
        npm i figlet   ==> i alias for install
        ! we need to be careful where we are installing the package. , because package ka scope utna hi hoga. 
            generally when we install we get 3 things or even more 
                1. Node module :- contained every installed dependency
                2. package-lock.json :- record exact version of installed dependency
       imp      3. package.json :- 
                    descriptive and metadata about a project. such as name , and version. 
                    package.json se hum Node Module ko hum dobara install kr sakte hi
                    infact github pr hum Node Module ko nhi push krte hi , jo bhi clone ya fork krega wo package.json se kr lega.
                    ! Way to get back node modue from package .json 
                        npm install  
                           this command do the job.



    Khud ke project ke liye package.jsoon kaise prepare kre.
        let say we create a MyProject and we want to use node for our Project, then we have to create package.json
            npm init     => initialization
            fill other detail

            ab agar hum aage chalke koi aur package install krna chahte hi to install krne pr dependencies aa jayegi , sab pehle jaisa , but pehle jaise package.json nhi hota tha to wo create hota tha but ab hi to wo modify ho jayeha


    ! Local installation vs global installation. 
        local jaise abhi tk krte hi , isme jis folder me insstall kiye hi whi use kr payenge  , tthis is best practice

        Kisi bi bhi package ko globally use krne ke liye -g wala flag add krna hot i
        npm install -g <-package name->
            global scope me install krnee ke liye pehle hume system ko administrator ki tarah khud ko batana padega , iski ek command hoti hi. you can find on chatgpt
            then also we have to link before use in any directory .

            npm link <-Package name-> 
                eise krne se package install ho jayega , lekin is bar system se hi aya hi , internet e nhi aya hi. , 

        ! import ke bare npm3.js file, in MYProject folder.

            import is asyncronous , require is syncronous . 
                require me cheeze line by line load hongi, whi import me async hi , agar 3-4 cheze kr rhe hi , to agar koi pehle available hoga to wo pehle bhi load ho jayega. 













*/