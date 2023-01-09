import React from 'react'
import Card from './Card';
import { cardsData, UpdatesData } from '../../Data/Data';
const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer " key={id}>
            <Card color={card.color}/>
            <div className="c-t font-semibold pt-5 text-lg">
              {card.title}
            </div>
            <div className="c-st">
              {card.place}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Cards