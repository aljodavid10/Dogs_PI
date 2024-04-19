const getDogsId = require("../controllers/getDogsId");

const handlerIDDogs = async (req, res) => {
    try {
        const { id } = req.params;
        const respuesta = await getDogsId(id)
    
        return res.status(200).json(respuesta);
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

module.exports = handlerIDDogs;