function createErrorMessage(data) {
    const cardHTML = `
        <div style="margin: 0 auto;" class="alert alert-danger" role="alert">
            Ha ocurrido un error con la carga de datos: ${data.message}
        </div>
    `;
    const divCol = document.createElement("div");
    divCol.innerHTML = cardHTML;
    const divRow = document.getElementById("peliculas");
    divRow.appendChild(divCol.firstElementChild)
}

module.exports = createErrorMessage;