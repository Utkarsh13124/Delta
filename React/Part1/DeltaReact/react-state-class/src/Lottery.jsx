import { useEffect, useState } from "react";
import Ticket from "./Ticket";
import {genTicket , sum} from "./helper"

export default function  Lottery({n , winningCondition}){
    let [ticket , setTicket] = useState(genTicket(n));

    let isWin = winningCondition(ticket);
    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery  Game!</h1>
            <Ticket ticket={ticket}></Ticket>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWin && "Congratulation, you won !"}</h3>
        </div>
    );  
}