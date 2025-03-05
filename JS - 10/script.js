let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // generate a random rgb values for a color
    // alert('Random');
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    const myDiv = document.querySelector('div');
    const myHead = document.querySelector('h1');

    myDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    myHead.innerText = `rgb(${r}, ${g}, ${b})`;

    console.log(`Generated color: rgb(${r}, ${g}, ${b})`);
});



//! This in Event listener 
// callback  ke ander this ka matlab that object
btn.addEventListener('mouseenter' , function() ){
    console.dir(this.innerText);
    console.log(this);// this refers to btn here.
}