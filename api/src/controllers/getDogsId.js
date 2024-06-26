const getAPIResults = require("./getAPIResults");
const { Dog, Temperament, Country } = require('../db.js');

const getDogsId = async (idSearch) => {
    try {
        if(Number(idSearch)){
            const resultados = await getAPIResults();
            const resultadoBusqueda = resultados.find(elemento => elemento.id === Number(idSearch));
            if(resultadoBusqueda){
                const {id, image, name, height, weight, life_span, temperament, origin } = resultadoBusqueda;
                resultado = {
                    id,
                    image: image.url,
                    name,
                    height: height.metric,
                    weight: weight.metric,
                    life_span,
                    temperament: temperament ? temperament.split(", ") : ["sin temperamentos"],
                    origin: origin ? origin.split(", ") : ["Origen desconocido"]
                }
            }else{
                throw new Error("No se encontro un resultado");
            }
        }else if((isNaN(idSearch)) && (idSearch.length === 36)){
            const respuesta = await Dog.findByPk(idSearch, {
                include: [
                    {
                        model: Temperament,
                        through: 'dog_temperament',
                        as: 'temperaments'
                    },
                    {
                        model: Country,
                        through: 'dog_country',
                        as: 'countries'
                    }
                ]
            })
            resultado = {
                id: respuesta.dataValues.id,
                image: respuesta.dataValues.image,
                name: respuesta.dataValues.name,
                height: respuesta.dataValues.height,
                weight: respuesta.dataValues.weight,
                life_span: respuesta.dataValues.life_span,
                temperament: respuesta.temperaments.map(temperament => temperament.dataValues.name),
                origin: respuesta.countries.map(country => country.dataValues.name)
            }
        }
        if(resultado.id)
            return resultado;
        else
            throw new Error("No se encontro un resultado");
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = getDogsId;