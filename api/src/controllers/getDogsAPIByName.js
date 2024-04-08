const axios = require("axios");
const getAPIResults = require("./getAPIResults");

const getDogsAPIByByName = async (req, res) => {
    try {
        const nameQuery = req.query.name;

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
        return res.status(200).json(dogsResultado);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports = getDogsAPIByByName;