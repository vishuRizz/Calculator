import React from 'react'

function ButtonContainer({arrInput}) {
  return (
    <div>
      <div id='buttonContainer'>
        {arrInput.map((e)=> <button type="button" className="cursor-pointer cust-button btn btn-outline-secondary" disabled>{e}</button> )}
   </div>
    </div>
  )
}

export default ButtonContainer
