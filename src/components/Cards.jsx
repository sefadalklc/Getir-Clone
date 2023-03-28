import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import cardsData from "../api/cards.json"

const Cards = () => {

 const [cards,setCards] = useState([]);


 useEffect(() => {

  setCards(cardsData)
 },[])


  return (
<div className="grid mt-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{cards.length && cards.map(card => (
          <div className='bg-white p-14 rounded-lg shadow-lg flex flex-col items-center justify-center text-center'>
            <img className='w-[150px] h-[150px mb-6' src={card.image} alt="" />
            <h6 className='font-semibold text-lg text-primary-brand-color'>{card.title}</h6>
            <p className='mt-2 text-sm text-gray-700'>{card.description}</p>
          </div>
        ))}
			</div>  )
}

export default Cards