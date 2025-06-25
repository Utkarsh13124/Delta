import {useState} from "react";

export default function LudoBtn(){

    let [move , SetMove] = useState({blue : 0 , green : 0}); // setting object , instead of in multiple line , helpful in larger codes.
    let [array , SetArray] = useState([]);

    let incBlue = () => {

        SetArray((prevArr => {
            return [...prevArr , " Blue Move "];
        }))

        SetMove((prevVal) => {
            return {...prevVal , blue : prevVal.blue += 1}
        })
    }
    let incGreen = () => {
        SetMove((prevVal) => {
            //  ! using spread operator to update setUpdate function in case of class used in useState.
            return {...prevVal , green : prevVal.green += 1}
        })
    }


    return (
        <>
            <h1>Game Begins ..!</h1>
            <p>Moves : {array} </p>
            <div style={{backgroundColor : 'blue'}}>Blue = {move.blue}</div>
            <button onClick={incBlue}>+1</button>
            <div style={{backgroundColor : 'green'}}>Green = {move.green}</div>
            <button onClick={incGreen}>+1</button>
        </>
    )
}