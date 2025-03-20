// From Lec
/*
    1. key press - game start
    2. btn flash + level 1
    3. game seq[] , userseq[]
        check -> 
            same --> level up
            else --> game over. 
*/

let gameSeq = [];
let userSeq = [];

let btns = ["red" , "yellow" , "purple" , "green" ];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener( 'keypress' , function() {
    if(started == false) {
        console.log("Game Started.");
        started = true;
    }
} );

function btnFlash(btn){
    // jab bhi koi property add krni hoti hi tab hum class bnaante hi
    btn.classList.add("flash");
    setTimeout( ()=>{
        btn.classList.remove("flash")
    } , 250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
}