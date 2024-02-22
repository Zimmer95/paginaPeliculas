const cleanForm = require("./cleanForm.js")
const axios = require("axios");

const createMovie = () => {
    if (document.getElementById('movieForm')) {
        document.getElementById('movieForm').addEventListener('submit', async (event) => {
            
            event.preventDefault();
            const formData = new FormData(event.target);
            const formDataObject = Object.fromEntries(formData.entries());
            
            try {
                const response = await axios.post(`http://localhost:3000/movies`, formDataObject);
                console.log(response.data);
                alert('Pelicula agregada correctamente');
            } catch (error) {
                console.error('Error en la solicitud:', error.message);
            }
            cleanForm();
        });
    } else {
        console.log("El elemento 'movieForm' no existe en el documento.");
    }
};

module.exports = createMovie;


