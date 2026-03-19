class Sistema {
  constructor() {
    this.estudiantes = [];
  }

  registrar(nombre, programa, nota) {
    const est = new Estudiante(nombre, programa, nota);
    this.estudiantes.push(est);
  }

  obtener(index) {
    return this.estudiantes[index];
  }
}