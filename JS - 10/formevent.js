// write html file having form 

    // <form id="myForm" action="/action">
    //     <input type="text" id="name" placeholder="Enter Name">
    //     <input type="email" id="email" placeholder="Enter Email">
    //     <button type="submit">Submit</button>
    // </form>
    // submit krte hi action ki link pr jayga

    //! submit event hota hi when we submit, register.
    //! event.preventDefault();
        // to prevent default task means defaulty we go on website mentioned in action, but we want to prevent this , we want to live on that site.

let form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    // let name = document.querySelector('#name').value;     // value for input field, and for other   
    // let email = document.querySelector('#email').value;

    //! alt by form 
    let name = this.element[0].value; // form.element[0].value
    let email = this.element[0].value;
    console.log(`Name : ${name}, Email : ${email}`);    
});


//! extracting data from form
// for input value property we have for other we have innerText.
