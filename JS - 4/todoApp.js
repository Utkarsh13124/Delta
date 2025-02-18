// Function to implement :- 
//     list - to show all task
//     add  - to add , task
//     delete - to delete the task
//     quit - to exit the todo

let todo = [];

let req = prompt("Please enter your request :");

while(true){
    if(req == "list"){
        console.log("Your todo list is :-");
        for(let i = 0 ; i < todo.length ; i++){
            console.log(`${i+1} . ${todo[i]}`);
        }
    }

    else if(req == "add"){
        let task = prompt("Enter the task you want to add :");
        todo.push(task);
        console.log(`Task added successfully!`);
    }

    else if(req = "delete"){
        let task = prompt("Enter the task number you want to delete :");
        if(task > 0 && task <= todo.length){
            todo.splice(task-1,1);
            console.log(`Task deleted successfully!`);
        }
        else{
            console.log("Invalid task number!");
        }
    }

    else if(req == "quit"){
        console.log("Exiting the todo app...");
        break;
    }
}   