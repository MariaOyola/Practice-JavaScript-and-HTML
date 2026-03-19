const inventario = new Inventario();

function agregarProducto() {
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);

  if (!nombre || isNaN(precio) || isNaN(cantidad)) {
    mostrar("Datos inválidos");
    return;
  }

  inventario.agregarProducto(nombre, precio, cantidad);
  actualizarSelect();
  mostrar("Producto agregado correctamente");
}

function actualizarSelect() {
  const select = document.getElementById("productoSelect");
  select.innerHTML = "";

  inventario.productos.forEach((p, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = p.nombre;
    select.appendChild(option);
  });
}

function verProducto() {
  const index = document.getElementById("productoSelect").value;
  const producto = inventario.obtenerProducto(index);

  if (!producto) return mostrar("Selecciona un producto");

  mostrar(producto.obtenerInfo());
}

function calcularTotal() {
  const total = inventario.calcularTotal();
  mostrar(`Valor total del inventario: $${total}`);
}

function mostrar(msg) {
  document.getElementById("resultado").textContent = msg;
}