//! Introduction to problem of callback hell in Real word, with demoDB

// function savetoDB(data , success , failure){
//     let speed = Math.floor(Math.random()  * 10) + 1;
//     if(speed > 4){
//         success();
//     }else{
//         failure();
//     }
    
// }

// savetoDB( "Apna College " , 
//     ()=>{
//         console.log("Your data is saved .");
//         savetoDB("Hello world " , 
//             ()=>{
//                 console.log("data saved2");
//             },
//             ()=>{
//                 console.log("Weak Connection data2 not saved.");
//             }
//         )
//     } ,
//     ()=>{
//         console.log("Weak Connection");
//     }
// )

//! solving problem with promises.
/*
    promises are object --> that eventually completion or failure. & if agar wo fail ya success hogya , to kya value humare pass ane wali hi.
    states -> pending , resolve, reject
    if resolve then then method is run. else  catch method run on reject.

Dont Crop
    */ 

function savetoDB(data){
    return  new Promise( (resolve , reject) => {
        let speed = Math.floor(Math.random() * 10 ) + 1;
        if(speed > 4){
            resolve("Data Saved.");
        }else{
            reject("failure Weak connection.");
        }
    });
};

savetoDB("Apna College")
    .then( () => {
        console.log("Promise1 fulfilled.");
        return savetoDB("Hello world");
    } )
    .then( () =>{
        console.log("Promise2 fulfilled.");
        return savetoDB("Utkarsh");
    })
    .then( () =>{
        console.log("Promise3 resolved.");
    })
    .catch( ()=>{
        console.log("Promise was rejected");
    })