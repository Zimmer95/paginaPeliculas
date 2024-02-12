function createMovieCard(title, director, duration, imageUrl) {
    const cardHTML = `
        <div class="col-sm pelicula">
            <div class="card">
                <img src="${imageUrl}" alt="${title}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">Director: ${director}</p>
                    <a href="#" class="btn btn-dark boton">Duración: ${duration}</a>
                </div>
            </div>
        </div>
    `;
    const divCol = document.createElement("div");
    divCol.innerHTML = cardHTML;
    return divCol.firstElementChild;
}

module.exports = createMovieCard;
