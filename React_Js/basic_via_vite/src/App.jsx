import { useState } from 'react'
import './App.css'


function App() {
  let [counter, setCount] = useState(0)
  function addValue() {
   if(counter<20){
    setCount(counter + 1) ;
   } else{
    alert("Counter value above 20 is not allowed") ;
   }
  }
  function substractValue() {
    if(counter>0){
     setCount(counter - 1) ;
    } else {
     alert("Negative value are not allowed")  ;
    }
  }
  return (
    <>
     <h1>Counting Game Here</h1>
     <h3>Current counting : {counter} </h3>
     <button onClick={addValue}>Increament</button><br></br>
     
     <button onClick={substractValue}>Decrement</button>
    </>
  )
}

export default App
