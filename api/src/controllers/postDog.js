const { Dog, Temperament, Country } = require('../db.js');
const validateDogData = require('../utils/validateDogData.js');

const postDog = async (data) => {
    try {
        const { name, image, height, weight, life_span, temperaments, origin } = validateDogData(data);

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

            return created;
        }
        return `La raza de perro ${name} ya existe`;
        
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = postDog;