const sistema = new Sistema();

function registrar() {
  const nombre = document.getElementById("nombre").value;
  const programa = document.getElementById("programa").value;
  const nota = parseFloat(document.getElementById("nota").value);

  if (!nombre || !programa || isNaN(nota)) {
    mostrar("Datos inválidos");
    return;
  }

  sistema.registrar(nombre, programa, nota);
  actualizarSelect();
  mostrar("Estudiante registrado correctamente");
}

function actualizarSelect() {
  const select = document.getElementById("selectEstudiante");
  select.innerHTML = "";

  sistema.estudiantes.forEach((e, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = e.nombre;
    select.appendChild(option);
  });
}

function verEstudiante() {
  const index = document.getElementById("selectEstudiante").value;
  const est = sistema.obtener(index);

  if (!est) return mostrar("Selecciona un estudiante");

  mostrar(est.obtenerInfo());
}

function mostrar(msg) {
  document.getElementById("resultado").textContent = msg;
}