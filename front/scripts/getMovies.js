const createMovieCard = require("./createCards.js");
const $ = require("jquery");

function getMovies() {
    const divRow = document.getElementById("peliculas");
    
    $.get(`https://students-api.2.us-1.fl0.io/movies`, (pelicula, status)=> {

        /* console.log(pelicula);
        console.log(status); */

        const cards = pelicula.map(movie => createMovieCard(movie.title, movie.director, movie.duration, movie.poster));
        cards.forEach(card => divRow.appendChild(card));

    });
}

module.exports = getMovies;
