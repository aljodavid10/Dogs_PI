import React, { useEffect, useState } from 'react'
import "./Cards.css"
import Card from "../card/Card"
import Pagination from '../pagination/pagination';
import { useSelector } from 'react-redux'

function Cards(props) {
  const page = useSelector(state => state.page)
  const [byPage, setByPage] = useState(8);
  const { dogs } = props.dogs;

  const max = Math.ceil(dogs.length / byPage);
  return (
    <div > 
      <div className='divCards'>
        {
          dogs
          .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
          .map(dog => (
            <Card
              key={dog.id}
              id={dog.id}
              image={dog.image}
              name={dog.name}
              temperament={dog.temperament}
              weight={dog.weight}
            />
            ))
        }
      </div>
      <div id='pagination'>
        <Pagination max={max}/>
      </div>
    </div>
  )
}

export default Cards