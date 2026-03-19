class Biblioteca {
  constructor() {
    this.libros = [];
  }

  registrar(titulo, autor) {
    const libro = new Libro(titulo, autor);
    this.libros.push(libro);
  }

  obtener(index) {
    return this.libros[index];
  }
}