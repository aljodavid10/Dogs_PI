const { Country } = require('../db.js');

const getCountries = async () => {
    try {
        const response = await Country.findAll();
        
        if(response.length){
            const countries = response.map(country => {
                return {
                    id: country.id,
                    name: country.name
                }
            })
            return countries;
        }
        throw new Error("Paises no encontrados");
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = getCountries;