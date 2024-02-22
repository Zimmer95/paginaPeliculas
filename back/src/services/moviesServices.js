const Movie = require("../models/Movie");


module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },

    postMovies: async (req) => {
        try {
            const newMovie = new Movie(req)
            const savedMovie =  await newMovie.save();
            return savedMovie;
        } catch (error) {
            console.error("Error al guardar la película:", error);
            throw error; // Lanza el error nuevamente para manejarlo en otro lugar si es necesario
        }
    }
    
}