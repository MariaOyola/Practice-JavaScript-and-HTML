class Libro {
  #disponible;

  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.#disponible = true;
  }

  prestar() {
    if (!this.#disponible) {
      return "El libro ya está prestado";
    }
    this.#disponible = false;
    return "Libro prestado correctamente";
  }

  devolver() {
    if (this.#disponible) {
      return "El libro ya está disponible";
    }
    this.#disponible = true;
    return "Libro devuelto correctamente";
  }

  info() {
    return `Título: ${this.titulo} | Autor: ${this.autor} | Estado: ${this.#disponible ? "Disponible" : "Prestado"}`;
  }
}
