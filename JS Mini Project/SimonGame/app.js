let btns = document.querySelectorAll(".btn");
let started = false , play = 0;
let seq = [];

let touch = -1;

for(let btn of btns){
    console.log("Btn Clicked.");
    btn.addEventListener('click' , game );
}

function flash(){
    let rand = Math.floor(Math.random() * 4);
    seq.push(rand);
    let display = document.querySelector("#display");
    display.innerText = `Level ${seq.length}`;

    play = 0 ; // upcomings touch would be of play
    console.log("Play is Zero" , play);
    let btn = btns[rand];
    let prevCol = getComputedStyle(btn).backgroundColor;
    btn.style.backgroundColor = "yellow";
    setTimeout( () => {
        btn.style.backgroundColor = prevCol;
    } , 200);
}

function game(){

    if(!started){ // if game is not started.
        started = true;
        console.log("Game Started : ");
        // flash
        flash();
    }else{
        console.log("Game is playing.");
        // detect click , applied on parents , event.target is tlling where the event is fired.
        
        document.querySelector(".btn-container").addEventListener("click", function(event) {
            // console.log(event.target.id);
            if (event.target.classList.contains("btn")) {
                touch = event.target.id;
                touch = Number(event.target.id.slice(-1)) - 1;
                
                
                // play is our index
                if(touch != seq[play]){
                    // game over
                    console.log(touch , seq[play] , play);
                    console.log("Game Over");
                }else{
                    play++; // wait for next click
                    if(play == seq.length){
                        flash();
                        // play = 0;
                    }
                }
            }
        });

        // match click with last flashed
            // matched show next flashed

            // else show result
    }
}


