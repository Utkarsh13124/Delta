/*
    Promise ek object hoti hi.
        jo  success ya failure return krega , jise  hum resolve ya reject bolte hi.
    
    Asynchronous function --> jo kayi sari cheezo pr depend kr rha  hi , jo variable hi.
*/

/*
    State of promise
        reject , pending , resolve.
    
        Promise object hi , to uske ander object bhi  honge. 
            object is fullfill , and we want to do some work , 
                then() method is used for that
            catch() --> method used when we want to do some work after failure  for our promise.
*/

function savetoDB(data){
    return new Promise( (success , failure) => {
        let speed = Math.floor(Math.random()  * 10 ) + 1;

        if(speed > 4){
            success("Success : Data was saved");
        }else{
            failure("Weak Connection : failure.");
        }
    });
}
//! simple promise
// let request = savetoDB("Apnna Clg"); // req = promise object returned by the function

// request.then( ()=> {
//     console.log("Promise was resolved , ab humne ye print krwaya hi success pr.");
//     console.log(request);
// })
// .catch( ()=>{
//     console.log("promise  was rejeccted.");
//     console.log(request);

// })

//! promise chaining
    // similar sytax like try catch , switch case , only catch is required to wrtie.

// savetoDB("Apna Colledge")
// .then( ()=>{
//     console.log("Data1 saved.");
//     savetoDB("Helloworld").then(()=>{
//         console.log("data2 saved.");;
//     })
// })
// .catch(()=>{
//     console.log("promise was rejected");
// });
//! A more compact way to write above.
    savetoDB("Apna Colledge")
    .then( ()=>{
        console.log("Data1 saved.");
        return savetoDB("helloworld"); // savetoDB function is returning a promise 
    })
    .then(()=>{
        console.log("Data1 saved.");
        return savetoDB("Shraddha");
    })
    .then(()=>{
        console.log("Data3 saved");
    })
    .catch(()=>{
        console.log("promise was rejected");
    });

//----///------///------------------------//
//! Part 1 , Part 2 above
// index2.html
// agar data save ho jaye to hume kuch kaam krwana hi, to hum 2 callback de de rhe hi.
  
//   function success(){
//     console.log("Data is Saved. Saved Data is : " , data );
//   }

//   function failure(){
//     console.log("weak connection");
//   }
// function savetoDB(data , success , failure){
//     let speed = Math.floor(Math.random()  * 10 ) + 1;

//     if(speed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// callback ke ander callback nesting , situation is becoming  callback hell.
// Apna Clg -> Hello World. -> Krishna -> 
// savetoDB("Apna Colledge" , 
//     ()=> {
//         console.log("Your data was saved : ");
//         savetoDB("hello world," ,
//             ()=>{
//                 console.log("Success2 : data2 ");
//                 savetoDB("Krishna" , 
//                     ()=> {
//                         console.log("Success3 saved : data ")
//                     },
//                     ()=>{
//                         console.log("Weak connection");
//                     }
//                 )
//             },
//             ()=>{
//                 console.log("Weak Connection , 2nd is failed.")
//             }
//          )
//     },
//     ()=>{
//         console.log("Weak Connection. Data not saved.");
//     }
// );