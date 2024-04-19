import React from 'react'
import "./Home.css"
import Cards from '../cards/Cards'
import Filters from '../filters/Filters'
import { useSelector } from 'react-redux'

function Home() {
  const storeDogs = useSelector(state => state.dogs);
  return (
    <div className='divHome'>
      <Filters/>
      <Cards dogs={storeDogs}/>
    </div>
  )
}

export default Home