import React from 'react'

function ButtonContainer({arrInput, onButtonClick}) {
  return (
    
      <div id='buttonContainer'>
        {arrInput.map((buttonText)=> 
         <button 
         onClick={()=> onButtonClick(buttonText)}
         type="button" className="btn btn-light cust-button">{buttonText}</button> )}
   </div>
    
  )
}

export default ButtonContainer
