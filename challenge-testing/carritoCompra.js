class carritoCompra {
    constructor() {
        this.carrito = [];
    }

    agregarProducto(producto) {
        /* const productos = producto.map(prod => (prod.nombre, prod.precio)); */
        this.carrito.push(producto)
    
    }

    calcularTotal(){
        let total = 0
        this.carrito.forEach(prod => {
            total = total + prod.precio
        });

        return total
    }

    aplicarDescuento(porcentaje){
        this.carrito = this.carrito.map(prod =>{
            let dto = (prod.precio * porcentaje)/100
            prod.precio = prod.precio - dto
            return prod
        })  
        return this.carrito;
    }
}

module.exports = carritoCompra;
