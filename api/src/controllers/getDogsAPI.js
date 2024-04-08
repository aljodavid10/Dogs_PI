const axios = require("axios");
const getAPIResults = require("./getAPIResults");

const getDogsAPI = async () => {
    try {
        const resultados = await getAPIResults();
        let dogs = [];
        for(const dato of resultados){
            const {id, image, name, height, weight, life_span, temperament, origin} = dato;
            dogs.push({
                id,
                image: image.url,
                name,
                height: height.metric,
                weight: weight.metric,
                life_span,
                temperament: temperament ? temperament.split(", ") : "sin temperamentos",
                origin: origin ? origin.split(", ") : "Origen desconocido",
                location: "API"
            })
        }
        return dogs;
    } catch (error) {
        return error.message;
    }
}

module.exports = getDogsAPI;