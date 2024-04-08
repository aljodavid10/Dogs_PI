const { Op } = require('sequelize');
const { Dog, Temperament, Country } = require('../db.js');

const getDogsDBByName = async (req, res) => {
    try {
        const nameQuery = req.query.name;

        console.log(nameQuery)
        const respuesta = await Dog.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${nameQuery}%`
                }
            },
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
        
        const modifiedDogs = respuesta.map(dog => {
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
        
        return res.status(200).json(modifiedDogs)
    } catch (error) {
        res.status(404).send(error.message);
    }

}

module.exports = getDogsDBByName;