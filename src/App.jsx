import './App.css'
import ButtonContainer from './components/ButtonContainer'
import Display from './components/Display'
function App() {
  let arrInput = ["C", "1", "2","+","3","4","-","5","6","*","7","8","/","=","9","0","."]

  return (
    <>
    <center id='calculator'>
      <Display/>
   <ButtonContainer arrInput={arrInput} />
    </center>
    </>
  )
}

export default App
