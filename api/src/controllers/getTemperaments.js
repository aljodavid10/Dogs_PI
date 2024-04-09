const { Temperamt } = require('../db.js');

const getTemperaments = async () => {
    try {
        const temperamnts = await Temperamt.findAll();
        
        if(temperamnts.length)
                return temperamnts;
        throw new Error("Temperamentos no encontrados")
    } catch (error) {
        return error.message;
    }
}

module.exports = getTemperaments;