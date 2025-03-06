let div  = document.querySelector("div");
let ul  = document.querySelector("ul");
let lis  = document.querySelectorAll("li");

function clickedFunc(event) {
    event.stopPropagation();  // prevent event bubbling up to parent element
    console.log(this);
}

div.addEventListener( "click" , clickedFunc);
ul.addEventListener( "click" , clickedFunc);

for (let li of lis) {
    li.addEventListener( "click" , clickedFunc);
}