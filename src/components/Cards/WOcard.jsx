import React from 'react'

const WOcard = (props) => {
  return (
    <div className=' rounded-full text-white woc'>
      <div>
        <span className='text-white text-lg'>{props.day}</span>
      </div>
      <div>
        <span className='font-semibold text-xl'>{props.date}</span>
      </div>
    </div>
  )
}

export default WOcard