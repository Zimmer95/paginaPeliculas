// Función para cambiar el color del navbar cuando se hace scroll

function alterNavBar() {
    
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("logo");

    if (window.scrollY > 0) {
        navbar.classList.add("color");
        logo.classList.add("image");
    } else {
        navbar.classList.remove("color");
        logo.classList.remove("image");
    }

}

module.exports = alterNavBar;