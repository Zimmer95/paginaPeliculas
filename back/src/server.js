const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const moviesRoutes = require("./routes/moviesRoutes.js")

const app = express();


app.use("/movies", morgan("dev"));

//* Convertir JSON a Objetos JS
app.use(express.json());

//* CORS
app.use(cors());

app.use("/movies", moviesRoutes);
/* app.use("/", loginRouter);*/
/* app.use("/login", authRouter);*/


module.exports = app;


