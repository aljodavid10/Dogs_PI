import React from 'react'
import "./Nav.css"
import SearchBar from '../searchBar/SearchBar'
import { Link } from "react-router-dom";

function Nav() {

  return (
    <div className='navBar'>
        <Link to='/home'><button className='home'>Home</button></Link>
        <SearchBar/>
        <Link to='/form'><button className='newDogs'>ingrese raza</button></Link>
    </div>
  )
}

export default Nav