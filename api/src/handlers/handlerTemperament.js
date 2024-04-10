const getTemperaments = require("../controllers/getTemperaments")

const handlerTemperament = async (req, res) => {
    try {
        const respuesta = await getTemperaments();

        return res.status(200).json(respuesta)
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

module.exports = handlerTemperament;