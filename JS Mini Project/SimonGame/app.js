let btns = document.querySelectorAll(".btn");
let started = false , play = 0;
let seq = [];
let display = document.querySelector("#display");

for(let btn of btns){
    // console.log("Btn Clicked.");
    btn.addEventListener('click' , game );
}

function flash(){
    let rand = Math.floor(Math.random() * 4);
    seq.push(rand);
    
    display.innerText = `Level ${seq.length}`;

    play = 0 ; // upcomings touch would be of play
    // console.log("Play is Zero" , play);
    let btn = btns[rand];
    let prevCol = getComputedStyle(btn).backgroundColor;
    btn.style.backgroundColor = "yellow";
    setTimeout( () => {
        btn.style.backgroundColor = prevCol;
    } , 200);
}

// detect click , applied on parents , event.target is tlling where the event is fired.
document.querySelector(".btn-container").addEventListener("click", function(event) {
    if (!started) return; // Ignore clicks if the game isn't started

    console.log("Game is playing.");
    // console.log(event.target.id);
    if (event.target.classList.contains("btn")) {
        let touch = event.target.id;
        touch = Number(event.target.id.replace("box", "")) - 1;
        
        
        // play is our index
        if(touch != seq[play]){
            // game over
            // console.log(touch , seq[play] , play);

            console.log("Game Over");
            resetGame();
        }else{
            play++; // wait for next click
            if(play == seq.length){
                setTimeout(flash , 500);
                // play = 0;
            }
        }
    }
});

function game(){
    if(!started){ // if game is not started.
        started = true;
        console.log("Game Started : ");
        // flash
        flash();
    }
}

function resetGame() {
    console.log("Restarting game...");
    display.innerText = `Press Any Key to Start!`;
    started = false;
    seq = [];
    play = 0;
}
