const { Dog, Temperament, Country } = require('../db.js');
const validateDogData = require('../utils/validateDogData.js');

const postDog = async (req, res) => {
    try {
        const { name, image, height, weight, life_span, temperaments, origin } = validateDogData(req.body);

        const [ newDog, created ] = await Dog.findOrCreate({
            where:{
                name
            }, defaults : {
                image,
                height,
                weight,
                life_span
            }
        })
        
        if(created){
            console.log({temperaments, origin})
            const newTemperaments = [];
            const newCountries = [];



            for(const nameTemperament of temperaments){
                let [ temperament ] = await Temperament.findOrCreate({where: {name: nameTemperament}});
                newTemperaments.push(temperament);
            }

            for(const nameCountry of origin){
                let [ country ] = await Country.findOrCreate({where: {name: nameCountry}});
                newCountries.push(country);
            }

            newDog.addTemperaments(newTemperaments);
            newDog.addCountry(newCountries);

            return res.status(200).json(newDog);
        }
        return res.status(300).send(`La raza de perro ${name} ya existe`)
        
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = postDog;