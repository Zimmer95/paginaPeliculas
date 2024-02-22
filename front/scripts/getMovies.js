const createMovieCard = require("./createCards.js");
const createErrorMessage = require("./createError.js")
const axios = require("axios")

const getMovies = async () => {
    try{
        const data =  await axios.get(`http://localhost:3000/movies`);
        data.data.map(movie => createMovieCard(movie.title, movie.director, movie.duration, movie.poster, movie.year, movie.rate, movie.description));

    }catch(data){
        createErrorMessage(data)
        console.log(data.message);
    }
}


module.exports = getMovies;
