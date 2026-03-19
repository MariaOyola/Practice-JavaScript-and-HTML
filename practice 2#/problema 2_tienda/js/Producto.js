class Producto {
  #cantidad;

  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.#cantidad = cantidad;
  }

  obtenerInfo() {
    return `Producto: ${this.nombre} | Precio: $${this.precio} | Cantidad: ${this.#cantidad}`;
  }

  calcularValor() {
    return this.precio * this.#cantidad;
  }
}
