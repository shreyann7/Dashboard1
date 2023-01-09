import React from 'react'
import Cards from '../Cards/Cards'
import Awards from '../SmallCards/Awards'
import PastEvent from '../SmallCards/PastEvent'
import Rnm from './Rnm'
import Searchbar from './Searchbar'
import Weather from './Weather'

const MainDash = () => {
  return (
    <div>
        <div className="search-bar">
        <Searchbar/>
        </div>
        <div className="dh-1 text-stone-700 font-bold text-4xl">
            Stories
        </div>
        <Rnm/>
        <Cards/>
        <div className="wd">
          <Weather/>
        </div>
        <div className="flex flex-row space-x-16">
            <PastEvent/>
            <Awards/>
        </div>
    </div>
  )
}

export default MainDash