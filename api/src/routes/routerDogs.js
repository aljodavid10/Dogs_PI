const { Router } = require("express");
const handlerAllDogs = require("../handlers/handlerAllDogs");
const routerDogs = Router();


routerDogs.get("/Dogs", handlerNameDogs);

module.exports = routerDogs;