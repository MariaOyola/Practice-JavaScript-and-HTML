const biblioteca = new Biblioteca();
let libroActual = null;

function registrarLibro() {
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;

  if (!titulo || !autor) return mostrar("Datos inválidos");

  biblioteca.registrar(titulo, autor);
  actualizarSelect();
  mostrar("Libro registrado correctamente");
}

function actualizarSelect() {
  const select = document.getElementById("libroSelect");
  select.innerHTML = "";

  biblioteca.libros.forEach((l, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = l.titulo;
    select.appendChild(option);
  });
}

function obtenerLibro() {
  const index = document.getElementById("libroSelect").value;
  return biblioteca.obtener(index);
}

function prestar() {
  const libro = obtenerLibro();
  if (!libro) return mostrar("Selecciona un libro");

  mostrar(libro.prestar());
}

function devolver() {
  const libro = obtenerLibro();
  if (!libro) return mostrar("Selecciona un libro");

  mostrar(libro.devolver());
}

function verInfo() {
  const libro = obtenerLibro();
  if (!libro) return mostrar("Selecciona un libro");

  mostrar(libro.info());
}

function mostrar(msg) {
  document.getElementById("resultado").textContent = msg;
}
