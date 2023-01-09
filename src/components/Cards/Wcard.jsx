import React from 'react'

const Wcard = (props) => {
  return (
    <div className="w-card">
        <div>
        <span className='text-stone-500 text-lg'>{props.day}</span>
    </div>
    <div>
        <span className='font-semibold text-xl'>{props.date}</span>
    </div>
    </div>
    
  )
}

export default Wcard