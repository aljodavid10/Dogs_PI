const getDogsAPI = require("../controllers/getDogsAPI");
const getDogsDB = require("../controllers/getDogsDB");

const handlerAllDogs = async (req, res) => {
    try {
        const respuestaAPI = await getDogsAPI();
        const respuestaDB = await getDogsDB();
        
        const respuesta = [ ...respuestaDB, ...respuestaAPI];

        if(respuesta)
            return res.status(200).json(respuesta);
        else
            throw new Error("No se recibio respuesta");
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = handlerAllDogs;