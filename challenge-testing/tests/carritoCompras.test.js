// Importar la clase CarritoCompra
const CarritoCompra = require('../carritoCompra');

// Pruebas para la clase CarritoCompra
describe('CarritoCompra', () => {
  // Prueba para verificar si el carrito se inicializa como un array vacío
    test('El carrito se inicializa como un array vacío', () => {
    const carrito = new CarritoCompra();
    expect(carrito.carrito).toEqual([]);
    });

  // Prueba para agregar un producto al carrito
    test('Agregar un producto al carrito', () => {
    const carrito = new CarritoCompra();
    const producto = { nombre: 'Camisa', precio: 20 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito).toEqual([producto]);
    });

  // Prueba para calcular el total de la compra
    test('Calcular el total de la compra', () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: 'Camisa', precio: 20 });
    carrito.agregarProducto({ nombre: 'Pantalón', precio: 30 });
    expect(carrito.calcularTotal()).toBe(50); // 20 + 30 = 50
    });

  // Prueba para aplicar un descuento al total de la compra
    test('Aplicar un descuento al total de la compra', () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: 'Camisa', precio: 20 });
    carrito.agregarProducto({ nombre: 'Pantalón', precio: 30 });
    carrito.aplicarDescuento(10); // Aplicar un descuento del 10%
    expect(carrito.calcularTotal()).toBe(45); // 50 - 10% = 45
    });
});
