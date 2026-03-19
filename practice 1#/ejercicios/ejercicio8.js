document.addEventListener("DOMContentLoaded", function () {

let botonlista_ = document.getElementById("botonlista_"); 
let input_ = document.getElementById("input_"); 
let lista_ = document.getElementById("lista_"); 

botonlista_.addEventListener("click", function () {

    let texto = input_.value; 

    let elemento = document.createElement("li"); 
    elemento.textContent = texto; 

    let botonEliminar = document.createElement("button"); 
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function() {
        lista_.removeChild(elemento); 
    }); 

    elemento.appendChild(botonEliminar); 
    lista_.appendChild(elemento); 

    input_.value = ""; 
});

}); 