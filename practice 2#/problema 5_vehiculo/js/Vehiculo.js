class Vehiculo {
  #velocidad;

  constructor(placa) {
    this.placa = placa;
    this.#velocidad = 0;
  }

  acelerar(valor) {
    if (valor <= 0) return "Valor inválido";
    this.#velocidad += valor;
    return `Velocidad aumentada. Actual: ${this.#velocidad} km/h`;
  }

  frenar(valor) {
    if (valor <= 0) return "Valor inválido";
    if (this.#velocidad - valor < 0) {
      this.#velocidad = 0;
      return "El vehículo se detuvo (0 km/h)";
    }
    this.#velocidad -= valor;
    return `Velocidad reducida. Actual: ${this.#velocidad} km/h`;
  }

  estado() {
    return `Vehículo ${this.placa} → Velocidad actual: ${this.#velocidad} km/h`;
  }
}