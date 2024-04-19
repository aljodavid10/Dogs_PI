import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import "./Form.css";
import getTemperaments from '../../controllers/getTemperaments';
import getCountries from '../../controllers/getCountries';
import modifiedOptions from '../../utils/modifiedOptions';
import validations from '../../utils/validations';
import postDog from '../../controllers/postDog';

function Form() {
  const regex = "^\d{1,2}\s*-\s*\d{1,2}$"

  const error = useSelector(state => state.errors)
  const dispatch = useDispatch();

  const [temperaments, setTemperaments] = useState([]);
  const [countries, setCountries] = useState([]);
  const [errors, setErrors] = useState({})
  const [dog, setDog] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
    origin: []
  });

  useEffect(() => {
    async function fetchTemperaments() {
      try {
        setTemperaments(await getTemperaments());
      } catch (error) {
        console.error(error.message);
      }
    }

    async function fetchCountries() {
      try {
        setCountries(await getCountries());
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchCountries();
    fetchTemperaments();
  }, []);

  const optionsTemperaments = modifiedOptions(temperaments);
  const optionsCountries = modifiedOptions(countries);



  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setDog({
      ...dog,
      [name]: value
    });
    setErrors(validations({...dog, [name]: value}))
  };

  const handleOrigin = (event) => {
    console.log(event)
    const selectedOptions = event.map(event => event.value);
    setDog({
      ...dog,
      origin: selectedOptions
    });
  }

  const handleTemperaments = (event) => {
    console.log(event)
    const selectedOptions = event.map(event => event.value);
    setDog({
      ...dog,
      temperaments: selectedOptions
    });
  }

  const handleValidation = () => {
    let errorMessages = '';
  
    for (let key in errors) {
      if (errors.hasOwnProperty(key)) {
        errorMessages += `${key}: ${errors[key]}\n`;
      }
    }
  
    // Mostrar los mensajes de error en un alert
    if (errorMessages !== '') {
      alert('Se encontraron los siguientes errores:\n\n' + errorMessages);
    } else if(error.length > 1){
      alert(error)
    }else{
      return true
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(handleValidation(errors)){
      postDog(dog, dispatch)
      setDog({
        name: "",
        image: "",
        height: "",
        weight: "",
        life_span: "",
        temperaments: [],
        origin: []
      })
    }

  }

  return (
    <div className='formulario-container'>
      <form className='formulario' onSubmit={handleSubmit}>
        <label className='lblTitulo' htmlFor="name">Nombre:</label>
        <input
          className='inData'
          type="text"
          id="name"
          name="name"
          value={dog.name}
          onChange={handleChange}
        />
        {
          errors.name &&
            (<p className='errores'>{errors.name}</p>)
        }

        <label className='lblTitulo' htmlFor="image">Imagen:</label>
        <input
          className='inData'
          type="text"
          id="image"
          name="image"
          value={dog.image}
          onChange={handleChange}
        />
        {
          errors.image &&
            (<p className='errores'>{errors.image}</p>)
        }

        <label className='lblTitulo' htmlFor="height">Altura:</label>
        <input
          className='inData'
          type="text"
          id="height"
          name="height"
          value={dog.height}
          onChange={handleChange}
        />
        {
          errors.height &&
            (<p className='errores'>{errors.height}</p>)
        }


        <label className='lblTitulo' htmlFor="weight">Peso:</label>
        <input
          className='inData'
          type="text"
          id="weight"
          name="weight"
          value={dog.weight}
          onChange={handleChange}
        />
        {
          errors.weight &&
            (<p className='errores'>{errors.weight}</p>)
        }

        <label className='lblTitulo' htmlFor="life_span">Expectativa de vida:</label>
        <input
          className='inData'
          type="text"
          id="life_span"
          name="life_span"
          value={dog.life_span}
          onChange={handleChange}
        />
        {
          errors.life_span &&
            (<p className='errores'>{errors.life_span}</p>)
        }

        <div className="select">
          <label className='lblTitulo' htmlFor="origin">Temperamentos:</label>
          <Select 
            isMulti
            options={optionsTemperaments}
            onChange={handleTemperaments}
          />
        </div>

        <div className="select">
          <label className='lblTitulo' htmlFor="origin">Origen:</label>
          <Select 
            isMulti
            options={optionsCountries}
            onChange={handleOrigin}
          />
        </div>

        <button className='guardar' type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default Form;
