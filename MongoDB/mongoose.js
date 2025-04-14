/*
    ! Mongoose --> NPM ki ek library hi.
        jo kaam hum mongo shell se kr sakte hi , un sabhi ko mongoose se bhi kr sakte hi. 
        hum seekh rhe hi ki kaise JS ke madhyam se DB ko control kre, kyuki hum app banyege, ya website bnayege waha pr ye help krega
        our end goal is ki express se kaise mongoose ko control krna hi.

      A library that creates a connection between MongoDB & Node.js javascript runtime environment.
       it is an ODM (object data modelling ) Library.

    - also it helps to design schema for database


    !! Installation & connectionn making
        npm i mongoose

        ! Thhis line is helping our JS file to connect with Data server of mongoDB
        address is given there , and mongodb protocol , then localhost , then port no. then DB name
        *mongoose.connect('mongodb://127.0.0.1:27017/test');
            connnect humara ek asynchronous function hi 
        
            async function main() {
            await mongoose.connect('mongodb://127.0.0.1:27017/test');
            
            // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
            }
            
            main()
            .then( () => {
                console.log("connection successful")
            } )
            .catch(err => console.log(err));


! Schemas 
    defines the shape of the documents within that collection., 
        blueprint of the document, 
        if scemas is defined, then every document have to follow it.
    































*/