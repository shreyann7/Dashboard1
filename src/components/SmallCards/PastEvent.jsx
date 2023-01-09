import React from 'react'
import { GrStackOverflow } from 'react-icons/gr';
const PastEvent = () => {
  return (
    <div>
        <div className="flex flex-row rounded-3xl p-e p-1">
            <div className='p-7'>
            <GrStackOverflow size = {35}/>
            </div>
            <div className='pt-5'>
                <span className='font-semibold text-lg'>
                    Past Events
                </span>
                <div className='pt-1 pb-2 text-xs text-slate-500'>
                    check details of previous events payments incoming and outgoings
                </div>
            </div>
        </div>
    </div>
  )
}

export default PastEvent