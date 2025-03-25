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

function changeColor( color, delay , nextColorChange){
    setTimeout( () => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red" , 1000, ()=> {
    changeColor("pink" , 1000, ()=> {
        changeColor("yellow" , 1000, ()=> {
            changeColor("green" , 1000, ()=> {
                changeColor("blue" , 1000);
            });
        });
    });
});