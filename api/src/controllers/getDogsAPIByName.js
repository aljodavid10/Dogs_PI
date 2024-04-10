const axios = require("axios");
const getAPIResults = require("./getAPIResults");

const getDogsAPIByByName = async (nameQuery) => {
    try {
        const resultados = await getAPIResults();

        const respuesta = resultados.filter(elemento => {
            return elemento.name.toLowerCase().includes(nameQuery.toLowerCase());
        });
        let dogsResultado = [];
        for(const dato of respuesta){
            const {id, image, name, height, weight, life_span, temperament, origin} = dato;
            dogsResultado.push({
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
        return dogsResultado;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = getDogsAPIByByName;