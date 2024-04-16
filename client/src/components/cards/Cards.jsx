import React from 'react'
import "./Cards.css"
import Card from "../card/Card"

function Cards(props) {
  
  const { dogs } = props.dogs;

  return (
    <div className='divCards'> 
      {
        dogs.map(dog => (
          <Card
            key={dog.id}
            image={dog.image}
            name={dog.name}
            temperament={dog.temperament}
            weight={dog.weight}
          />
          ))
      }
    </div>
  )
}

export default Cards