const axios = require("axios");
const getAPIResults = require("./getAPIResults");

const getDogsId = async (req, res) => {
    try {
        let resultado = {};
        const idSearch = req.params.id;
        if(Number(idSearch)){
            const resultados = await getAPIResults();
            const resultadoBusqueda = resultados.find(elemento => elemento.id === Number(idSearch));
            const {id, image, name, height, weight, life_span, temperament, origin } = resultadoBusqueda;
            resultado = {
                id,
                image: image.url,
                name,
                height: height.metric,
                weight: weight.metric,
                life_span,
                temperament: temperament ? temperament.split(", ") : "sin temperamentos",
                origin: origin ? origin.split(", ") : "Origen desconocido"
            }
        }else if((isNaN(idSearch)) && (idSearch.length === 36)){
            const respuesta = await Dog.findByPk(idSearch, {
                include: [
                    {
                        model: Temperament,
                        through: 'dog_temperament',
                        as: 'temperament'
                    },
                    {
                        model: Country,
                        through: 'dog_country',
                        as: 'origin'
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
                origin: respuesta.countrys.map(country => country.dataValues.name)
            }
        }
        if(resultado.id)
            return res.status(200).json(resultado);
        else
            return res.status(404).send("No se encontro un resultado");
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = getDogsId;