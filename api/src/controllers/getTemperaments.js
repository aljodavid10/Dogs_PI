const { Temperament } = require('../db.js');

const getTemperaments = async () => {
    try {
        console.log("AQUI")
        const response = await Temperament.findAll();
        
        if(response.length){
            const temperaments = response.map(temp => {
                return {
                    id: temp.id,
                    name: temp.name
                }
            })
            return temperaments;
        }
        throw new Error("Temperamentos no encontrados")
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = getTemperaments;