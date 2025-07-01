import './App.css'
import { sum } from './helper'
import Lottery from './Lottery'


function App() {
  let winningCondition = (ticket) => {
    return sum(ticket) == 15;
  }

  return (
    <>
         <Lottery n={3} winningCondition={winningCondition}></Lottery>
    </>
  )
}

export default App
