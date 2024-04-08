const { Router } = require("express");
/* const getDogsAPI = require('../controllers/getDogsAPI');
const getDogsAPIByName = require("../controllers/getDogsAPIByName");
const getDogsDB = require("../controllers/getDogsDB");
const getDogsDBByName = require("../controllers/getDogsDBByName");
const getDogsId = require("../controllers/getDogsId");
const postDog = require("../controllers/postDog"); */
const routerDogs = require("./routerDogs");

Router.all("/dogs",routerDogs);


module.exports = router;
