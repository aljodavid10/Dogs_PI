import React, { useEffect, useState } from 'react'
import "./Detail.css"
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import getDogDetail from '../../controllers/getDogDetail';

function Detail() {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const dispatch = useDispatch();

  useEffect(()=>{
    async function fetchDog(){
      try {
        if(!dog.id)
          setDog(await getDogDetail(id, dispatch))
      } catch (error) {
        alert(error.message)
      }
    }
    fetchDog()
  })

  console.log(dog)

  return (
    <div className='detail'>
      <div className='image'>
        <img src={dog.image} alt="dog" />
      </div>
      <h5 className='titulo'>{dog.name}</h5>
      <div className='datos'>
        <div className='detail-section'>
          <div className='texto'>
            <h3>Height: </h3>
            <p>{dog.height}</p>
          </div>

          <div className='texto'>
            <h3>Weight: </h3>
            <p>{dog.weight}</p>
          </div>

          <div className='texto'>
            <h3>Life span: </h3>
            <p>{dog.life_span}</p>
          </div>
        </div>
        <div className='detail-section temperaments'>
            <h4>Temperaments:</h4>
            <ul>
              {dog.temperament && dog.temperament.map((temp, index) => (
                <li key={index}>{temp}</li>
              ))}
            </ul>
        </div>
        <div className='detail-section origin'>
            <h4>Origin:</h4>
            <ul>
              {dog.origin && dog.origin.map((country, index) => (
                <li key={index}>{country}</li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Detail