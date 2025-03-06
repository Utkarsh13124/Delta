/*
remove is use to delete the element after selecting it. 
create element to append and prepend these things. 

event delegation : - delete button events are  not working for later added delete buttonns */
let input = document.querySelector('input');
let button = document.querySelector("button");

button.addEventListener('click', function() {
    // console.log("Button");
    // alert("cliked");

    let value = input.value;
    if (value.trim() === '') {  
        alert('Please enter a task!');  
        return; // Stop the function if the input is empty  
    } 

    const newtask = document.createElement('li');

    newtask.textContent = value;
    const todoList = document.getElementById('todo-list');
    
    // todoList ke ander as a child hum add krna chahte hi. 
    todoList.appendChild(newtask);
    input.value = '';
} );