// if we are applying some same property on multiple object.

let btn = document.querySelector('button');
let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');

btn.addEventListener('click', function() {
    console.dir(this);
    this.style.backgroundColor = 'red';
});
// alt
btn.addEventListener('click' , changeColor);

p.addEventListener('click', function() {
    console.dir(this);
    this.style.backgroundColor = 'yellow';
});

h1.addEventListener('click', function() {
    console.dir(this);
    this.style.backgroundColor = 'blue';
});

h3.addEventListener('click', function() {
    console.dir(this);
    this.style.backgroundColor = 'green';
});


// ! Alt 
function changeColor(){
    this.style.backgroundColor = 'pink';
}