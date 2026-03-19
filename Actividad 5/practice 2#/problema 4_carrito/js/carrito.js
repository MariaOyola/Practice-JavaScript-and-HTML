class Carrito {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    this.productos.push(producto);
  }

  eliminar(index) {
    this.productos.splice(index, 1);
  }

  calcularTotal() {
    return this.productos.reduce((total, p) => total + p.precio, 0);
  }
}
