import React from 'react'
import { FiAward } from 'react-icons/fi';
const Awards = () => {
  return (
    <div>
        <div className="flex flex-row rounded-3xl p-e p-1">
            <div className='p-7'>
            <FiAward size = {35}/>
            </div>
            <div className='pt-5'>
                <span className='font-semibold text-lg'>
                    Awards & Bonus
                </span>
                <div className='pt-1 pb-2 text-xs text-slate-500'>
                    rewards and bonous auto for current events and shows By our system
                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards