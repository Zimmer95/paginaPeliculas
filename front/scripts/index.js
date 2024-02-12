const getMovies = require("./getMovies.js");
const alterNavBar = require("./alterNavBar.js");

// Event listener para detectar el evento de scroll y cambiar el color del navbar
window.addEventListener("scroll", alterNavBar);

// Llamar a la función para obtener las películas cuando se carga la página
window.addEventListener("load", getMovies);
