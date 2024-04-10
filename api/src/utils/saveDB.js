const { axios } = require("axios");
const { Temperament, Country } = require('../db.js');
const getAPIResults = require("../controllers/getAPIResults.js");

const saveDB = async () => {
    try {
        const contTemp = await Temperament.count();
        const contCount = await Country.count();

        if(contTemp > 0 && contCount > 0){
            console.log("las tablas ya tienen datos");
            return;
        }

        let temperaments = []
        let countries = [];

        const respuestas = await getAPIResults();
        for(const respuesta of respuestas){
            const { temperament, origin } = respuesta;
            if(temperament){
                const arrayTemp = temperament.split(", ");
                
                arrayTemp.map(temp => {
                    temperaments.push(temp);
                });
            }
            if(origin){
                const arrayCount = origin.split(", ");
                arrayCount.map(count => {
                    countries.push(count)
                });
            }
        }

        for(const temperament of temperaments){
            await Temperament.findOrCreate({
                 where: { name: temperament }
            })
        }
        for(const country of countries){
            await Country.findOrCreate({
                where: { name: country }
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = saveDB;