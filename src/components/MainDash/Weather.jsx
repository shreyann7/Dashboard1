import React from 'react'
import Wcard from '../Cards/Wcard'
import Table from './Table'

const Weather = () => {
  return (
    <div>
        <div className="weather-section space-y-7">
        <div className="dh-1 text-stone-700 font-bold text-3xl  ">
            Event Dates
        </div>
        <div className="date rounded-full ">
            <span className='p-3'>
                August 12-2020
            </span>
        </div>
        </div>
        <Table/>
    </div>
  )
}

export default Weather