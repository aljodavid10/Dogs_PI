const { Router } = require("express");
const handlerAllDogs = require("../handlers/handlerAllDogs");
const routerDogs = Router();


routerDogs.get("", handlerAllDogs);

module.exports = routerDogs;