/*
    Synchronous --> code line by line chl rha hi.
    Asynchronous --> code me ups and downs bhi hi.
*/

/*
    Problem arise due to synchrronus nature is callback hell.
        callback ki nesting --> callback hell. 
         isko samajhne me time lagta hi, debug krne me.
        isse bachne k solution
            promise
            async and await.
*/

let h1 = document.querySelector("h1");

// function changeColor( color, delay , nextColorChange){
//     setTimeout( () => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red" , 1000, ()=> {
//     changeColor("pink" , 1000, ()=> {
//         changeColor("yellow" , 1000, ()=> {
//             changeColor("green" , 1000, ()=> {
//                 changeColor("blue" , 1000);
//             });
//         });
//     });
// }); 


//! solution using promise
 
function changeColor( color , delay ){
    return new Promise ( (resolve , reject ) =>{
        setTimeout(() => { 
            h1.style.color = color;
            resolve("Color Changee. ");
        }, delay);  

        setTimeout(() => { 
            h1.style.color = color;
            resolve("Color Changee. ");
        }, delay + 10);
        
    });
}

changeColor("red" , 1000)
.then( () => {
    console.log("Red color was completed.");
    return changeColor("orange" , 1000);
})
.then( () => {
    console.log("Orange color was completed.");
    return changeColor("yellow" , 1000);
})
.then( () => {
    console.log("Yellow color was completed.");
    return changeColor("green" , 1000);
})
.then( () => {
    console.log("Green color was completed.");
})
.catch(()=>{
    console.log("Color not change.");
});