class Estudiante {
  #nota;

  constructor(nombre, programa, nota) {
    this.nombre = nombre;
    this.programa = programa;
    this.#nota = nota;
  }

aprobar() {
  if (this.#nota >= 3.5 && this.#nota <= 5) {
    return "Aprobado";
  } else if (this.#nota >= 1 && this.#nota < 3.5) {
    return "Desaprobado";
  } else {
    return "Nota inválida";
  }
}

  obtenerInfo() {
    return `Nombre: ${this.nombre} | Programa: ${this.programa} | Nota: ${this.#nota} | Estado: ${this.aprobar()}`;
  }
}