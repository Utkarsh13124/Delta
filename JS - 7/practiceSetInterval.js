// run a function fixed number of time. 

let id = setInterval( () => {
    console.log("HelloWorld!");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Timer stopped!");
}, 10000);