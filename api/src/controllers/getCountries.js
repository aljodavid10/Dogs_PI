const { Country } = require('../db.js');

const getCountries = async () => {
    try {
        const countries = await Country.findAll();
        
        if(countries.length)
                return countries;
        throw new Error("Paises no encontrados");
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = getCountries;