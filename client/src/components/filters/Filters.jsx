import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Filters.css'
import { filter, filterCardsLocation, orderCards } from '../../redux/actions'
import getTemperaments from '../../controllers/getTemperaments'
import getCountries from '../../controllers/getCountries'
import getRazas from '../../controllers/getRazas'

function Filters() {
    const [temperaments, setTemperaments] = useState([]);
    const [countries, setCountries] = useState([]);

    const dispatch = useDispatch();
  

  useEffect(()=>{
    async function fetchTemperaments(){
      try {
        setTemperaments(await getTemperaments(dispatch));
      } catch (error) {
        console.error(error.message);
      }
    }
    async function fetchCountries(){
        try {
            setCountries(await getCountries(dispatch));
          } catch (error) {
            console.error(error.message);
          }
    }
    fetchCountries()
    fetchTemperaments()
  },[])

  const handleOrder = (evento) => {
    dispatch(orderCards(evento.target.value))
  }

  const handleFilter = (evento) =>{
    dispatch(filter(evento.target.value))
  }

  const handleFilterLocation = (evento) => {
    dispatch(filterCardsLocation(evento.target.value))
  }

  function handleClick(){
    getRazas(dispatch)
  }
    return (
        <div className='botonera'>
          <div className='restart'>
            <button className='btnRestart' onClick={handleClick}>ver todos</button>
          </div>
          <div className='filtros'>
              <div className="custom-select">
                  <select name="order" defaultValue='orderDogs' onChange={handleOrder}>
                  <option value="orderDogs" disabled='disabled'>Order</option>
                  <option value="ascendenteID">ID ^</option>
                  <option value="descendenteID">ID v</option>
                  <option value="ascendenteWeight">Ascendente Weight</option>
                  <option value="descendenteWeight">Descendente Weight</option>
                  </select>
              </div>

              <div className="custom-select">
                  <select name="filterLocation" defaultValue='locationDogs' onChange={handleFilterLocation}>
                  <option value="locationDogs" disabled='disabled'>Filter</option>
                  <option value="All">All</option>
                  <option value="API">API</option>
                  <option value="DB">Database</option>
                  </select>
              </div>

              <div className="custom-select">
                  <select name="filter" defaultValue='All' onChange={handleFilter}>
                  <option value="temperamentsDogs" disabled='disabled'>Temperaments</option>
                  <option value="All">All</option>
                  {temperaments.map((temp, index) => (
                      <option key={index} value={temp.name}>{temp.name}</option>
                  ))}
                  </select>
              </div>
          </div>
        </div>
    )
}

export default Filters