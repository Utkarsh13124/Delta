/*
    async keyword is used 
        ! By default it returns a promise.
*/

async function greet(){
    return "Hello"; // returns a promise.
        /*
            state fulfilled,
            result = "hello"
        */

}

let hello = async () => {}; // returns a promise
    /*
        state fulfilled
        result undefined.
    */

// We can use throw statement to throw some error
async function greet2(){
    throw " Weak connection ";
    abc.abc()
    return "hello"; // error received = "Reference error , abc.abc() not defined"
    //" We can use throw "Some random Error"
    // state rejected
}

greet2()
.then( (res)=> {
    console.log("Promise was resolved" , res);

})
.catch( (err)=> {
    // console.log("Promise was rejected" , err);
})



//! await 
    /*
        pauses all the execution of its surrounding async function until the promise is settled ( resolved or rejected ) but not pending
        can only usedwith async function.
        
    */

function getNum(){
    return new Promise( (resolve , reject) => {
        setTimeout( () => {
            let num = Math.floor( Math.random() * 10 ) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

// we want to print numbers after gap of 1 sec.
async function demo() {
   // this will print all numbers once after 1 seconds, as eah 1 second start simultaneously 
    getNum();
    getNum();
    getNum();
    getNum();
    getNum();
}
async function demo() {
    // this will print  numbers  after 1 seconds, as awaits pauses further any execution of asynchronous function
    // like if we have do API works ki agar ye  ho jayega , to hum ye krenge.  
     await getNum();
     await getNum();
     await getNum();
     await getNum();
     getNum();
 }

let h1 = document.querySelector("h1");
//! solving previous problems of callback hells
function changeColor( color , delay ){
    return new Promise( (resolve , reject) => {
        let num = Math.floor( Math.random() *  8 ) + 1;
        setTimeout( () => {
            if(num > 3) {
                reject("Color Cant be changed. ");
                 throw "Error occured"
            }
            h1.style.color = color;
            console.log(`Color changes to ${color}!`);
            resolve("color changed!");
        } , delay);
    });
};

async function demo2() {
    try{
        await changeColor("red" , 1000);
        // await changeColor("orange" , 1000);
        // await changeColor("green" , 1000);
        await changeColor("blue" , 1000);
    }catch(err){
        console.log("Error caught : " , err);
    }
}