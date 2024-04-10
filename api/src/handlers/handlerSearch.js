const getDogsAPIByByName = require("../controllers/getDogsAPIByName");
const getDogsDBByName = require("../controllers/getDogsDBByName");
const validateDogData = require("../utils/validateDogData");

const handlerSearch = async (req, res) => {
    try {
        const { name } = validateDogData(req.query);

        const respuestaDB = await getDogsDBByName(name);
        const respuestaAPI = await getDogsAPIByByName(name);
        
        const respuesta = [ ...respuestaDB, ...respuestaAPI];

        if(respuesta.length)
            return res.status(200).json(respuesta);
        else
            throw new Error("No se obtuvo respuesta.");
    } catch (error) {
        return res.status(400).send(error.message);
    }
    

}

module.exports = handlerSearch;