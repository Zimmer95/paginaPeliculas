const cleanForm = () => {
    const form = document.getElementById('movieForm');
    
    if (form) {

        Array.from(form.elements).forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
                element.value = '';
            }
        });
    } else {
        console.log("El elemento 'movieForm' no existe en el documento.");
    }
};

module.exports = cleanForm;

