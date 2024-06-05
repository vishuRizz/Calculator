import React from 'react'


function Display({calVal}) {
  return (
    <div>
         <input id='display' 
         type="text" 
         className='border-2' 
         value={calVal} 
         readOnly
         />

    </div>
  )
}

export default Display
