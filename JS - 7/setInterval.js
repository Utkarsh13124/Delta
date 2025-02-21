// same as setTimeout 
    // ut ye usi kaam ko again and again krta hi , usi interval 
// everycall have setIntervalId

let id = setInterval( () => {
    console.log("Hello World");
}, 2000); // 2000 milliseconds = 2 seconds.

console.log(id);

let id2 = setInterval( () => {
    console.log("Hello World");
}, 2000); // 2000 milliseconds = 2 seconds.
console.log(id2);

//! or stoping the id setIntervalId
clearInterval(id);
