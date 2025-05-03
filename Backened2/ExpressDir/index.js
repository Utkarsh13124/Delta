const express = require("express"); // fetching express
const app = express(); // running express function , and storing its result
// app ke humare express ke bhut saare ffunction hi.
// console.dir(app);



/*
    app.listen(); as express is used for listening reu=quest so it does with this function
    2 parameters :- ports
                        ports are logical exchange connecting point btw client and server
                            3000 ,8080 , nearly many ports are allloted but many are free.
                    a callback function which will run on port when server starts.


    http://localhost:3000/
     if server is running , we get some text like cannot get / , else we get localhost refused to connect.



*/
/*
    recieving request :=> agar hum apne localhost pr kuch search krenge, ya uske kisi route pr jaane ki koshish krenge, tab ek request jayegi jise hum jo ki server side pr baithe hue ko sunne ke liye use() method ka use krne padega.
    port pr hum listen krte hi app.use() se hum request ko recieve krte hi.
    jitni baar hum port pr request bhejenge , chahe browser se ,ya postman ya hoppscotch se , humara app.use() wala code run hoga.
    app.use( (req , res)=> ){


    }



*/

let port = 3000;

app.listen( port , () => {
    console.log(`App is listening on port ${port}`);
})

// app.use( (req , res) =>{
//     console.log("request received.");
//     // console.log(req);
//     // res.send({
//     //     name : "apple" ,
//     //     color : "red"
//     // });
//     // res.send("Sending a string.");
//     let htmlCode = "<h1>Fruits</h1>";
//     res.send(htmlCode);
// })



/*
    ! Sending a response.
    request(req) , response(res)  object inside use.
    hum jo request bhete hi , wo text form me hoti hi, use parse krta hi express, and convert into request object. 
        so alag alag language bhi samajh paye object ko .


    for sending a response we use response object.     
        hum kaisa bhi response bhej sakte hi.
        with help of res.send() ;

        express convert the thing into json format.

*/

/*
    !Routing 
        sending request on different path.

        ek path ke upar hum ek hi response bhej sakte hi.

        app.use() sabhi  ath ki response ko receive krta hi.


        !app.get()
            response to a get request.
            have two parameter , first is route , second is callback.
        / agar ab hum kis eise path pr request bhejenge , jo humne define nhi kiya then we are going to get cannot get path error. because we havent define the root , app.use() hi sabki accept krta tha.

        agar hum chahte hi ki apart from defined route aur sari request ko hum ek jagah redirect kr sakte hi , to humhe wild card * route bna sakte hi.

        !app.post() similary it also work
*/

// app.get("/" , (req , res) =>{
//     res.send("You contacted root path.");
// })
// app.get("/apple" , (req , res) =>{
//     res.send("You contacted apple path.");
// })
// app.get("/orange" , (req , res) =>{
//     res.send("You contacted orange path.");
// })
// app.get("*" , (req , res) =>{
//     res.send("You contacted on a wrong route. ");
// })
// app.post("/" , (req , res) =>{
//     res.send("You sent  a post request to the route. ");
// })

//! installed nodemon to run node automatically , 
    // now we have to run our file like this , 
        // nodemon index.js

//--------------------------------------------------------------------------------------------
/*
    ! Path parameter

    for variable define we use colon , 
        why need of variable?
            as instagram pr multiple account hum sabke liye to route nhi bnayaege, to hum variables ka use krte hi.
    req.params => returns object of parameter passed.
        params method is present inside request object.
*/


app.get("/" , (req , res) =>{
    res.send("You contacted root path.");
})
app.get("/:username/:id" , (req , res) =>{
    let {id , username } = req.params;
    res.send(`Welcome to our page Mr.${username}`);
    console.log(req.params);
})

/*
    ! Query
        req.query returns list of all query  sent by user.
        ?q="" query aise bheji jati hi
        used to send additional information with parameter
*/
app.get("/search" , (req , res) =>{
    console.log(req.query);
    let {q} = req.query;
    if(q){
        res.send("No query send.");
    }
    res.send(`Search result for ${q}`);
})

