const express = require("express");
const { postMovies, getMovies, putMovies, deleteMovies } = require("../controllers/moviesController.js");
const routerMovies = express.Router();


routerMovies.get("/", getMovies);
routerMovies.post("/", postMovies);
routerMovies.put("/", putMovies);
routerMovies.delete("/", deleteMovies);

module.exports = routerMovies;