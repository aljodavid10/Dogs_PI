const { Router } = require("express");
const handlerAllDogs = require("../../handlers/handlerAllDogs");
const handlerSearch = require("../../handlers/handlerSearch");
const handlerPost = require("../../handlers/handlerPost");
const handlerIDDogs = require("../../handlers/handlerIDDog");

const routerDogs = Router();

routerDogs.get("", handlerAllDogs);
routerDogs.get("/search", handlerSearch);
routerDogs.get("/:id", handlerIDDogs);
routerDogs.post("", handlerPost);

module.exports = routerDogs;