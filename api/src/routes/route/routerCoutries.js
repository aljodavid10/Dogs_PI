const { Router } = require("express");
const handlerCountries = require("../../handlers/handlerCountries");

const routerCountries = Router();

routerCountries.get("", handlerCountries);

module.exports = routerCountries;