const router = require("express").Router(); 
const getDogsAPI = require('../controllers/getDogsAPI');
const getDogsAPIByName = require("../controllers/getDogsAPIByName");
const getDogsDB = require("../controllers/getDogsDB");
const getDogsDBByName = require("../controllers/getDogsDBByName");
const getDogsId = require("../controllers/getDogsId");
const postDog = require("../controllers/postDog");
const handlerAllDogs = require("../handlers/handlerAllDogs");
const handlerNameDogs = require("../handlers/handlerNameDogs");
const routerDogs = require("./routerDogs");

router.get("/dogs",handlerNameDogs);

module.exports = router;
