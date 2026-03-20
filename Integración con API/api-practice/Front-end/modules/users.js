// Obtener todos los datos 
async function getAllUsers() {
  let users = await queue(urlUsers, get);
  let container = document.getElementById("container");
  container.innerHTML = "";
  loadData(container, users);
}

// Buscar por ID
async function getUserById() {
  let id = document.getElementById("idUser").value;

  let user = await queue(urlUsers + "/" + id, get);

  let container = document.getElementById("container");
  container.innerHTML = "";
  loadData(container, user);
}
// CREAR producto (POST)
async function createUser() {
  let user = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    maidenName: document.getElementById("maidenName").value,
    age: parseInt(document.getElementById("age").value),
    gender: document.getElementById("gender").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    birthDate: document.getElementById("birthDate").value
  };

  await queue(urlUsers, post, user);

  alert("Usuario creado");
  getAllUsers();
}

//Actualizar producto 

async function updateUser() {
  let id = document.getElementById("idUpdateUser").value;

  let user = {
    firstName: document.getElementById("firstNameUpdate").value,
    lastName: document.getElementById("lastNameUpdate").value,
    age: parseInt(document.getElementById("ageUpdate").value),
    email: document.getElementById("emailUpdate").value
  };

  await queue(urlUsers + "/" + id, put, user);

  alert("Usuario actualizado");
  getAllUsers();
}
// eliminar producto 
async function deleteUser() {
  let id = document.getElementById("idDeleteUser").value;

  await queue(urlUsers + "/" + id, deletes);

  alert("Usuario eliminado");
  getAllUsers();
}

// buscar por nombre 

async function searchByName() {
  let name = document.getElementById("nameFilter").value;
  let users = await queue(urlUsers + "?firstName_like=" + name, get);
  let container = document.getElementById("container");
  container.innerHTML = "";
  loadData(container, users);
}