const router = require("express").Router();
const routerCountries = require("./route/routerCoutries");
const routerDogs = require("./route/routerDogs");
const routerTemperaments = require("./route/routerTemperaments");

router.use("/dogs",routerDogs);
router.use("/countries", routerCountries);
router.use("/temperaments", routerTemperaments)

module.exports = router;
