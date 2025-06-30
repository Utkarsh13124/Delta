import { useState } from "react"

export default function(){

    let [newTask , setNewTask] = useState("");

    let [array , setArray] = useState([]);

    let addTask = () => {
        setArray(prev => [...prev, newTask]);


        setNewTask("");
    }

    function updateNewTask(e){
        setNewTask(e.target.value);
    }

    return (
        <>  
           
            <input type="text" placeholder="add a task" value={newTask} onChange={updateNewTask}/>
            <br /><hr />
            <button onClick={addTask}>Add Task</button>

            <hr />
            <h4>Tasks Todo</h4>
            <ul id="taskList">
                { 
                    array.map((element) => (  
                        <li>{element}</li>
                    ))
                }
            </ul>
        </>
    )
}