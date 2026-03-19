// Obtener todos los datos 
async function getAllProducts() {
  let products = await queue(urlProducts, get);
  let container = document.getElementById("container");
  container.innerHTML = "";
  loadData(container, products);
}

// Buscar por ID
async function getProductById() {
  let id = document.getElementById("idFilter").value;
  let product = await queue(urlProducts + "/" + id, get);
  let container = document.getElementById("container");
  container.innerHTML = "";
  loadData(container, product);
}

// CREAR producto (POST)

async function createProduct() {
  let product = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    price: parseFloat(document.getElementById("price").value),
    category: document.getElementById("category").value
  };

  await queue(urlProducts, post, product);
  alert("Producto creado");
  getAllProducts();
}

//Actualizar producto 

async function updateProduct() {
  let id = document.getElementById("idUpdate").value;

  let product = {
    title: document.getElementById("titleUpdate").value,
    price: parseFloat(document.getElementById("priceUpdate").value),
    description: document.getElementById("descriptionUpdate").value,
    category: document.getElementById("categoryUpdate").value
  };

  await queue(urlProducts + "/" + id, put, product);

  alert("Producto actualizado");
  getAllProducts();
}

// eliminar producto 

async function deleteProduct() {
  let id = document.getElementById("idDelete").value;

  await queue(urlProducts + "/" + id, deletes);

  alert("Producto eliminado");
  getAllProducts();
}

