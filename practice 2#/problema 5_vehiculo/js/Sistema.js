class Sistema {
  constructor() {
    this.vehiculos = [];
  }

  registrar(placa) {
    const v = new Vehiculo(placa);
    this.vehiculos.push(v);
  }

  obtener(index) {
    return this.vehiculos[index];
  }
}