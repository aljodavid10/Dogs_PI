import { useState } from 'react';
import "./SearchBar.css";
import searchController from '../../controllers/searchController';
import { useDispatch } from 'react-redux'
import { getPage } from '../../redux/actions';

function SearchBar() {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

   function handleChange(evento){
      setName(evento.target.value)
   }

   const search = () => {
      searchController(name, dispatch);
      setName("");
      dispatch(getPage(1))
   }

   const searchEnter = () => {
      if(event.key === 'Enter') {
         searchController(name, dispatch);
         setName("");
         dispatch(getPage(1))
      }
   }
  return (
    <div className="searchZone">
       <button className='buscar' onClick={search} >{">"}</button>
       <input className='inputBuscar' type='search' onChange={handleChange}
       placeholder="Buscar raza:" value={name} onKeyDown={searchEnter}/>
    </div>
 );
}

export default SearchBar