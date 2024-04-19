require("dotenv").config();
const { URL, API_KEY } = process.env;
const axios = require("axios");

const getAPIResults = async() => {
    try {
        const { data } = await axios.get(`${URL}?api_key=${API_KEY}`);
        const resultados = data;
        return resultados;
    } catch (error) {
        return error.message;
    }
}
module.exports = getAPIResults;