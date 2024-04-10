const { Router } = require("express");
const handlerTemperament = require("../../handlers/handlerTemperament");

const routerTemperaments = Router();

routerTemperaments.get("", handlerTemperament);

module.exports = routerTemperaments;