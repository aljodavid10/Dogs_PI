import React from 'react'
import "./Card.css"

function Card({image, name, temperament, weight}) {
  return (
    <div className='cardContainer'>
        <img className='imgCard' src={image} alt={name} />
        <h2>{name}</h2>
        <div className='temperaments'>
          {
            temperament.map((temp, index)=>(
              <h3 className='temperament' key={index}>{temp}</h3>
            ))
          }
        </div>
        <h3 className='weight'>{weight} kg</h3>
    </div>
  )
}

export default Card