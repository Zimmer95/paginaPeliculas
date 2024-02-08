

function createCard(title, director, duration, /* description,  */ imageUrl, rate, year) {

    const divCol = document.createElement("div");
    divCol.className = "col-sm pelicula";


    const divCard = document.createElement("div");
    divCard.className = "card";
    
    const divCardBody = document.createElement("div");
    divCardBody.className = "card-body";

    const image = document.createElement("img");
    image.src = imageUrl;
    image.alt = title;
    image.className = "card-img-top"

    const titleLabel = document.createElement("h5");
    titleLabel.className = "card-title"
    titleLabel.innerText = title;
    
    const directorLabel = document.createElement("p");
    directorLabel.className = "card-text"
    directorLabel.innerText = "Director: " + director;
    
    const durationLabel = document.createElement("a");
    durationLabel.className = "btn btn-primary"
    durationLabel.innerText = "Duracion: " + duration;

    /* const rateLabel = document.createElement("p");
    rateLabel.innerText = "Valoracion: " + rate;

    const yearLabel = document.createElement("p");
    yearLabel.innerText = "Año: " + year; */

    /* const descLabel = document.createElement("p");
    descLabel.innerText = "Descripcion: " + description; */

    divCol.append(divCard);
    divCard.append(image, divCardBody /*  rateLabel, yearLabel descLabel */);
    divCardBody.append( titleLabel, directorLabel, durationLabel /*  rateLabel, yearLabel descLabel */);


    return divCol;
}

const divRow = document.getElementById("peliculas");


function getMovies(){
    $.get(`https://students-api.2.us-1.fl0.io/movies`, (pelicula, status) => {
        console.log(pelicula)
        console.log(status)
        pelicula.forEach(movie => {
            const card = createCard(movie.title, movie.director, movie.duration, /* movie.description,  */movie.poster, movie.rate, movie.year);
            divRow.appendChild(card);
        });
        pelicula.forEach(movie => {
            const card = createCard(movie.title, movie.director, movie.duration, /* movie.description,  */movie.poster, movie.rate, movie.year);
            divRow.appendChild(card);
        });
        pelicula.forEach(movie => {
            const card = createCard(movie.title, movie.director, movie.duration, /* movie.description,  */movie.poster, movie.rate, movie.year);
            divRow.appendChild(card);
        });
        pelicula.forEach(movie => {
            const card = createCard(movie.title, movie.director, movie.duration, /* movie.description,  */movie.poster, movie.rate, movie.year);
            divRow.appendChild(card);
        });
    })
}

getMovies()

// Obtener el navbar
var navbar = document.getElementById("navbar");

// Función para cambiar el color del navbar cuando se hace scroll hacia abajo
function cambiarColorNavbar() {
    if (window.scrollY > 0) {
        navbar.className = "navbar navbar-expand-lg fixed-top color"
    } else {
        navbar.className = "navbar navbar-expand-lg fixed-top transparent"; // Volver al color transparente cuando se encuentra arriba
    }
}

// Event listener para detectar el evento de scroll y llamar a la función para cambiar el color del navbar
document.addEventListener("scroll", cambiarColorNavbar);
