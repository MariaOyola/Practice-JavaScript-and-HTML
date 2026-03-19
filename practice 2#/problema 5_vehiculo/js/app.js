const sistema = new Sistema();
let vehiculoActual = null;

function registrarVehiculo() {
  const placa = document.getElementById("placa").value;

  if (!placa) return mostrar("Ingresa una placa válida");

  sistema.registrar(placa);
  actualizarSelect();
  mostrar("Vehículo registrado");
}

function actualizarSelect() {
  const select = document.getElementById("vehiculoSelect");
  select.innerHTML = "";

  sistema.vehiculos.forEach((v, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = v.placa;
    select.appendChild(option);
  });
}

function seleccionarVehiculo() {
  const index = document.getElementById("vehiculoSelect").value;
  vehiculoActual = sistema.obtener(index);
  mostrar(`Vehículo seleccionado: ${vehiculoActual.placa}`);
}

function acelerar() {
  if (!vehiculoActual) return mostrar("Selecciona un vehículo");

  const valor = parseInt(document.getElementById("velocidad").value);
  mostrar(vehiculoActual.acelerar(valor));
}

function frenar() {
  if (!vehiculoActual) return mostrar("Selecciona un vehículo");

  const valor = parseInt(document.getElementById("velocidad").value);
  mostrar(vehiculoActual.frenar(valor));
}

function verEstado() {
  if (!vehiculoActual) return mostrar("Selecciona un vehículo");

  mostrar(vehiculoActual.estado());
}

function mostrar(msg) {
  document.getElementById("resultado").textContent = msg;
}
