let btns = document.querySelectorAll("button");

for(btn of btns){
    btn.onclick = sayHello;
}


function sayHello(){
    console.log("Hello World!");
}
