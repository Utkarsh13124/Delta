import { useState } from "react"
import {v4 as uuidv4} from "uuid";

export default function(){

    let [todos , setTodos] = useState([{ task : "sample-task" , id : uuidv4() , isDone : false }]); 

    let [newTodo , setNewTodo] = useState("");

    let addTask = () => {
        setTodos(prevTodos => [...prevTodos, { task: newTodo, id: uuidv4() , isDone : false }]);

        setNewTodo("");
    }

    let deleteTask = (id) => {

        // console.log(e);
        setTodos(prevTasks => prevTasks.filter(task => task.id !== id));

    }

    let upperCaseAll = () => {
        setTodos( prevTodos => 
            prevTodos.map( todo => ( 
                { // this for returning object
                    ...todo ,
                    task: todo.task.toUpperCase(),
                }
            )
        )    
        )
    };
let markAsDone = (id) => {
    setTodos(prevTodos =>
        prevTodos.map(todo => 
            todo.id === id 
                ? { ...todo, isDone: true }
                : todo  // Just return the original todo
        )
    );
};

/*
let upperCaseAllOne = (id) => {
    setTodos( prevTodos =>
        prevTodos.map(todo =>
            todo.id === id
                ? { ...todo, task: todo.task.toUpperCase() }
                : { ...todo }
        )
    );
};
*/




    function updateNewTask(e){
        setNewTodo(e.target.value);
    }

    return (
        <>  
           
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateNewTask}/>
            <br /><hr />
            <button onClick={addTask}>Add Task</button>

            <hr />
            <h4>Tasks Todo</h4>
            <ul id="taskList">
                { 
                    todos.map((todo) => (  
                        <li key={todo.id}  style={ {textDecoration :  todo.isDone ? "line-through" : "none"} }>{todo.task}     
                            <button onClick={() => deleteTask(todo.id)}>Delete</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                        </li>  // jab  hum arrow function ki form pass kr rhe hi , to wo yha pr execute nhi kra rha hi , wo ek copy create krta hi.        
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>Uppercase All</button>
        </>
    )
}