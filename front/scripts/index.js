const getMovies = require("./getMovies.js");
const alterNavBar = require("./alterNavBar.js");
const createMovie = require("./createMovie.js")



// Event listener para detectar el evento de scroll y cambiar el color del navbar
window.addEventListener("scroll", alterNavBar);

// Llamar a la función para obtener las películas cuando se carga la página
window.addEventListener("load", getMovies);


if(document.getElementById('submitButton')){
    // Agrega un event listener al evento click del botón
    document.getElementById('submitButton').addEventListener('click', createMovie)
    
    }else{
        console.log("aqui no existe ese elemento")
    }