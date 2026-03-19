class Inventario {
  constructor() {
    this.productos = [];
  }

  agregarProducto(nombre, precio, cantidad) {
    const producto = new Producto(nombre, precio, cantidad);
    this.productos.push(producto);
  }

  obtenerProducto(index) {
    return this.productos[index];
  }

  calcularTotal() {
    return this.productos.reduce((total, p) => total + p.calcularValor(), 0);
  }
}