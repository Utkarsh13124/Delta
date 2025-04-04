const express = require("express");
const app = express();
const port = 8080;

// for using UUID package for creating unique id. 
const { v4 : uuidv4 } = require('uuid');
    // const { v4: uuidv4 }: This uses destructuring to grab the v4 function from the uuid module and renames it to uuidv4.
    // v4 ffunction ko hum use kr rhe hi , uuidv4 name se , v4 means version4
// ! for creating id => uuidv4() it will give a id.


// for linking folders
const path = require("path");

// helping express to understand parse the onject data in requeest body
    app.use(express.urlencoded({ extended : true }));
    app.use(express.json());

// for using EJS template
    app.set("view engine" , "ejs");
    app.set("views" , path.join(__dirname, "views"));

// linking static files from public folder
    app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id : uuidv4(),
        username : "apnaClg",
        content : "I love Coding."
    },
    {
        id : uuidv4(),
        username : "Utkarsh",
        content : "I am covering Backlog"
    },
    {
        id : uuidv4(),
        username : "Krishna",
        content : "He love everyone."
    },
]

app.listen(port , ()=>{
    console.log("Listening to port : 8080");
});

//! index js
app.get("/posts" , (req, res)=>{
    res.render("index.ejs" , { posts });
});

//! post request : - for posting a new post with help of two route
    app.get("/posts/new" , (req , res) => {
        res.render("new.ejs");
    })

    app.post("/posts" , (req, res)=>{
        // console.log(req.body);
            // adding the data of req.body to DB / arr
        let {username , content} = req.body;

        //* giving new Id to post using UUID
        let id = uuidv4();

        // posts.push({username : username , content : content});
            //! same naam rehta hi to as key value pass krne ki jarrorat nhi rehti hi.
        posts.push({id , username , content});
        // res.send("post req is working.");
        //! redirecting to all post
        res.redirect("/posts");
    })

// Show route :- showing with specific Id.
    app.get("/posts/:id" , (req , res) => {
        let {id} = req.params; // id would always be unique , even the username could be same , but id for a post would be different , as a same user is posting again and again
        console.log("post : " , id);
            //The find method is used to search through the posts array. It returns the first element that satisfies the provided testing function.
        let post = posts.find( (p) => id === p.id );
        console.log("Show : ",  post);
        if(post) res.render("show.ejs" , { post });
    });

app.patch("/posts/:id" , (req , res) => {
    let { id } = req.params;
    let newContent = req.body.content; //! fetching direct value, without destructuring
        // newContent me modified value  hi jise humhe modify  krna hi
    // console.log(id , newContent);

    //! we have id , by using that we are finding post
    let post = posts.find( (p) => id === p.id );
    //! If post exists, update it
    if (post) {
        post.content = newContent;
        console.log(post);
        res.send("Post updated successfully.");
    } else {
        res.status(404).send("Post not found.");
    }
});