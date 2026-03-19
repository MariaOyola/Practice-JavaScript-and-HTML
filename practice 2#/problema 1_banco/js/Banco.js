// Clase Banco (modularización y reutilización)
class Banco {
  constructor() {
    this.cuentas = [];
  }

  crearCuenta(nombre, saldo) {
    const cuenta = new Cuenta(nombre, saldo);
    this.cuentas.push(cuenta);
  }

  obtenerCuenta(index) {
    return this.cuentas[index];
  }
}
