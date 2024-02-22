const moviesServices = require("../services/moviesServices");

//* CRUD movies


const getMovies = async (req, res) => {
    const movies = await moviesServices.getMovies()
    res.status(200).json(movies)
};

const postMovies = async (req, res) => {
    try {
        const newMovie = await moviesServices.postMovies(req.body);
        res.status(200).json(newMovie);
    } catch (error) {
        console.error("Error al procesar la solicitud:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

const putMovies = (req, res) => {
    res.send("PUT a la ruta '/movies'");
};

const deleteMovies = (req, res) => {
    res.send("DELETE a la ruta /movies")
};

module.exports = {
    postMovies, getMovies, putMovies, deleteMovies
}