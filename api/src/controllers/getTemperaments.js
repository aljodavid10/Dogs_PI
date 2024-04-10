const { Temperament } = require('../db.js');

const getTemperaments = async () => {
    try {
        console.log("AQUI")
        const temperamnts = await Temperament.findAll();
        
        if(temperamnts.length)
                return temperamnts;
        throw new Error("Temperamentos no encontrados")
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = getTemperaments;