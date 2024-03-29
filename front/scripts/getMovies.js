const createMovieCard = require("./createCards.js");
const createErrorMessage = require("./createError.js");
const axios = require("axios");

const movies = require("https://zimmer95.github.io/paginaPeliculas/assets/data/data.js");


const getMovies = async () => {
    try{

        const data  = movies;
        console.log(data)
        /* const data =  await axios.get(`https://henry-movies-dev-sgtm.3.us-1.fl0.io/`); */
        data.data.map(movie => createMovieCard(movie.title, movie.director, movie.duration, movie.poster, movie.year, movie.rate, movie.description));

    }catch(data){
        createErrorMessage(data)
        console.log(data.message);
    }
}


module.exports = getMovies;
