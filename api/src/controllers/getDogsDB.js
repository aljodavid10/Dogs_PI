const { Dog, Temperament, Country } = require('../db.js');

const getDogsDB = async () => {
    try {
        const respuesta = await Dog.findAll({
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

        let modifiedDogs = [];

        if(respuesta){
            modifiedDogs = respuesta.map(dog => {
                return {
                    id: dog.dataValues.id,
                    image: dog.dataValues.image,
                    name: dog.dataValues.name,
                    height: dog.dataValues.height,
                    weight: dog.dataValues.weight,
                    life_span: dog.dataValues.life_span,
                    temperament: dog.temperaments.map(temperament => temperament.dataValues.name),
                    origin: dog.countries.map(country => country.dataValues.name),
                    location: "DB"
                }
            })
        }
        return modifiedDogs;
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports = getDogsDB;