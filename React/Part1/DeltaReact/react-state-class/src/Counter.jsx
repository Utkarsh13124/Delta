import { useState } from "react"

// for studigng use state hook
export default function Counter(){
    let [count , setCount] = useState(0);

    function incCount(){
        setCount(count + 1);
    }



    return (
        <div>
            <button onClick={incCount}>Increase Count</button>
            <h3>Count = {count}</h3>
        </div>
    )
}