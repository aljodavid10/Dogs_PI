import React from 'react'
import "./Home.css"
import Cards from '../cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { filter, filterCardsLocation, orderCards } from '../../redux/actions'

function Home() {

  const dispatch = useDispatch();
  const storeDogs = useSelector(state => state.dogs);

  const handleOrder = (evento) => {
    dispatch(orderCards(evento.target.value))
  }

  const handleFilter = (evento) =>{
    dispatch(filter(evento.target.value))
  }

  const handleFilterLocation = (evento) => {
    dispatch(filterCardsLocation(evento.target.value))
  }
  return (
    <div>
      <div className='filtros'>
          <div className="custom-select">
            <select name="order" defaultValue='orderVideogames' onChange={handleOrder}>
              <option value="orderDogs" disabled='disabled'>Order</option>
              <option value="ascendenteID">Ascendente ID</option>
              <option value="descendenteID">Descendente ID</option>
              <option value="ascendenteWeight">Ascendente Weight</option>
              <option value="descendenteWeight">Descendente Weight</option>
            </select>
          </div>

          <div className="custom-select">
            <select name="filterLocation" defaultValue='locationDogs' onChange={handleFilterLocation}>
              <option value="locationDogs" disabled='disabled'>Filter</option>
              <option value="API">API</option>
              <option value="DB">Database</option>
            </select>
          </div>

          {/* <div className="custom-select">
            <select name="filter" defaultValue='All' onChange={handleFilter}>
              <option value="All">All</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre.name}>{genre.name}</option>
              ))}
            </select>
          </div> */}
        </div>
      <Cards dogs={storeDogs}/>
    </div>
  )
}

export default Home