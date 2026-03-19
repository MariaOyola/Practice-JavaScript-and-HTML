const banco = new Banco();
let cuentaActual = null;

function crearCuenta() {
  const nombre = document.getElementById("nombre").value;
  const saldo = parseFloat(document.getElementById("saldoInicial").value);

  if (!nombre || isNaN(saldo)) {
    mostrar("Datos inválidos");
    return;
  }

  banco.crearCuenta(nombre, saldo);
  actualizarSelect();
  mostrar("Cuenta creada correctamente");
}

function actualizarSelect() {
  const select = document.getElementById("clienteSelect");
  select.innerHTML = "";

  banco.cuentas.forEach((cuenta, inicial) => {
    const option = document.createElement("option");
    option.value = inicial;
    option.textContent = cuenta.nombre;
    select.appendChild(option);
  });
}

function seleccionarCuenta() {
  const index = document.getElementById("clienteSelect").value;
  cuentaActual = banco.obtenerCuenta(index);
  mostrar(`Cuenta seleccionada: ${cuentaActual.nombre}`);
}

function depositar() {
  if (!cuentaActual) return mostrar("Selecciona una cuenta");

  const monto = parseFloat(document.getElementById("monto").value);
  mostrar(cuentaActual.depositar(monto));
}

function retirar() {
  if (!cuentaActual) return mostrar("Selecciona una cuenta");

  const monto = parseFloat(document.getElementById("monto").value);
  mostrar(cuentaActual.retirar(monto));
}

function verSaldo() {
  if (!cuentaActual) return mostrar("Selecciona una cuenta");

  mostrar(cuentaActual.verSaldo());
}

function mostrar(msg) {
  document.getElementById("resultado").textContent = msg;
}
