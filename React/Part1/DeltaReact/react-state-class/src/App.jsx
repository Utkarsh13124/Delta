import './App.css'
import { sum } from './helper'
import Lottery from './Lottery'
import Form from './Form'


function App() {
  let winningCondition = (ticket) => {
    return sum(ticket) == 15;
  }

  return (
    <>
    <Form></Form>
         {/* <Lottery n={3} winningCondition={winningCondition}></Lottery> */}
    </>
  )
}

export default App
