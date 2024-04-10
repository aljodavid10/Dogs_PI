const getCountries = require("../controllers/getCountries");

const handlerCountries = async (req, res) => {
    try {
        const respuesta = await getCountries();
        
        return res.status(200).json(respuesta);
    } catch (error) {
        return res.status(400).send(error.message);
    }


}

module.exports = handlerCountries;