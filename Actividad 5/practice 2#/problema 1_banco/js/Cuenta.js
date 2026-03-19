class Cuenta {
  #saldo;

  constructor(nombre, saldoInicial) {
    this.nombre = nombre;
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto <= 0) return "Monto inválido";
    this.#saldo += monto;
    return `Depósito exitoso. Nuevo saldo: $${this.#saldo}`;
  }

  retirar(monto) {
    if (monto <= 0) return "Monto inválido";
    if (monto > this.#saldo) return "Fondos insuficientes";

    this.#saldo -= monto;
    return `Retiro exitoso. Saldo restante: $${this.#saldo}`;
  }

  verSaldo() {
    return `Saldo actual de ${this.nombre}: $${this.#saldo}`;
  }
}
