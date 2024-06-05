import './App.css'
import { useState } from 'react'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'
function App() {
  let arrInput = ["C", "1", "2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]

 let [calVal, setCalVal] = useState("")

function onButtonClick(buttonText){
 if(buttonText === "C"){
      setCalVal("")
 } else if(buttonText==="="){

 } else {
  const newDisplayValue = calVal + buttonText;
  setCalVal(newDisplayValue);
 }
  
}

  return (
    <>
    <center id='calculator'>
      <Display calVal={calVal} />
   <ButtonContainer arrInput={arrInput}
    onButtonClick={onButtonClick}
    />
    </center>
    </>
  )
}

export default App
