/*
    REST :- 
      Representational state transfer
      means as a set of rules to creating web server. 
      
    Restful API :- which apply concepts of REST.
        they are not new technology , they are rules. 
        REST are way to create  API 

    CRUD operation performs using RESTFUL api
        create 
        read :- retrieve resources :-get
        update
        delete

            HTTP verbs in CRUDS
                Get :- retrieves resources
                Post :- submit new data to the server
                Put :- update existing Data
                Patch :- Update existing data paritially
                Delete removes data.

        resources :- jiske upar hum CRUD operations perform kr rhe hi like tweets, ussers , posts.




    BEST documentation :- 
      ! hw:-  stack overflow :- best-practices-for-rest-api-design
            1. we should use noun instead of verbs.



*/


//! Making Quora 
/*
    firstly we are aiming to make quora page with post with basic functionalities like , username and content , 
        later we add other details , like edit , delete , see all post , see individual posts

    Get     /posts  to get data for all posts   INDEX (MAIN) route 
    Post    /POSTS      TO ADD A NEW POST       CREATE ROUTE
    GET /POSTS/:ID  to get one post(using id)    VIEW   //! Ids are provide by DB , but currently we replicate this feature
    PATCH /posts/:id    to update specific PoST         UPDATE ROUTE
DELETE      /posts/:id  to delete specific post     DESTROY ROUTE //! by convention delete
*/

/*
    ! creating index route
        Get     /posts to get data for all posts

        creating a array to store data to replicating DB.
*/

/*
    ! implement : POST /posts
        POST    /post   to add a new post.

            we need to create a 2 route :- 
                1. serve the form to get details like user , content. 
                    and sending to Backend
                2. Post , new post add to DB/array here.

            we make with help of get request  , wha se dataa collect kiya use post request me bheja , 
            post se collect kiya use ab store krenge. 

    ! redirect
        redirect is used to send get request on some url
            like humne post kr diya to ek to hum abhi tk res.send("msg") kr rhe the , 
                but ab hum ise apne all post wale page pr redirect kr dege.
        

*/

/*
! Show route :- giving information using ID
    Implement : GET/posts/:id
    GET     /posts/:id      to get one post (using id)
    
? we setted , but when we are creating for new post , we not have any id. when we are creating it, because we have given id by ourself, 
    so new post are not have any id, and they are also not coming db , so they not given any id by Db
    ! solution Could be :- using counter , and when new post come we use counter to give him id.
        lets see some better wway , as this is working but not a good way as from eye of development purpose.

*/

//! Create id for Posts
    /*
        UUID package
            Universally unique identifier

        ! for this package
            npm i uuid
    */

// ! Implement : Patch / posts/:id
    /*
        update route
            to update specific post( as id  username to same rhega.)
            we can also ue PUT request uska syntax bhi similar rheta hi.

            sending patch request with hopscotch, humhe request body ko edit krke usme jo , cheeze change krni hi use , key value ki form me bhejenge.
            
    */

//! Edit route 
/*
    CREATE form for UPDATE
        serve the edit form         GET         /posts/:id/edit

        humhe patch request bhejni for update , jo humne upar bnayi hi, but html forms only sent get , and post request
        ! we use package method-override
            matlab , get ya post ko katkar use patch , put , ya delete bna dega.

        *Usage documentation me hi:- 
            here most used one is discussed :- query method
            <form method="post" action="/resource?_method=DELETE">
                button type="submit" > Delete Resource</button>
            </form>
          
          hum normal get ya post request hi bhejte hi, but ander ek query bhej denge _method="DELETE"
            one important thing , in ejs form , use key "name" to set the thing which is changing , as "name" goes in request body ,
          ?How happened :- create an route , create ejs page
            send patch request to patch route update route that is created.  
*/


//! Delete path
/*
    Destroy route
    implement: posts/:id        Delete      to delete a specific page.

    How to do :- 
        first give delete /link , create a route for it , create a rendering page for it, sends request, do logic work if needed.
            link se hum form wala tarika use krenge request bhejne ke liye
            to hum button ko form ka btn bna denge , aur form me post action , aur DELETE request send krenge by using overrideen
        button wala tarika bhi hi , usme addd event listener laga kr humhe request bhejna padega

            btn send delete request on route , where we do logic
                logic is filter all except that. 
*/