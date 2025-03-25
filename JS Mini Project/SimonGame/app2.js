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
        levelUp();
    } 
} );

function gameFlash(btn){
    // console.log("gameFlash check" , btn.classList);
    // jab bhi koi property add krni hoti hi tab hum class bnaante hi
    btn.classList.add("gameFlash");
    // console.log("gameFlash check" , btn.classList);
    setTimeout( ()=>{
        btn.classList.remove("gameFlash")
    } , 250);
}
function userFlash(btn){
    // jab bhi koi property add krni hoti hi tab hum class bnaante hi
    btn.classList.add("userFlash");
    setTimeout( ()=>{
        btn.classList.remove("userFlash")
    } , 250);
}

function levelUp(){

    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level :" , level);
    // console.log(idx , gameSeq ,"  ", userSeq)
    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
            // levelUp();
        }
    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( () => {
            document.querySelector("body").style.backgroundColor = "white";
        } , 150);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);



}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}