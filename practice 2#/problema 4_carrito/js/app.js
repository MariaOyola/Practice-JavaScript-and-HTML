const carrito = new Carrito();

function agregarProducto() {
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);

  if (!nombre || isNaN(precio) || precio <= 0) {
    alert("Datos inválidos");
    return;
  }

  const producto = new Producto(nombre, precio);
  carrito.agregar(producto);

  render();
}

function eliminarProducto(index) {
  carrito.eliminar(index);
  render();
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  carrito.productos.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.nombre} - $${p.precio}
      <button class="btn remove" onclick="eliminarProducto(${i})">X</button>
    `;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = "$" + carrito.calcularTotal();
}