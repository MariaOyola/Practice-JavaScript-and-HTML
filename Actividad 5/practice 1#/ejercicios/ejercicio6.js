document.addEventListener("DOMContentLoaded", function () {

    let formulario = document.getElementById("formulario"); 

    let nombre = document.getElementById("nombre6"); 
    let edad = document.getElementById("edad6"); 
    let correo = document.getElementById("correo6"); 
    let error = document.getElementById("error"); 

    formulario.addEventListener("submit", function (event) {

        event.preventDefault(); 

        if (nombre.value === "" || edad.value === "" || correo.value === "") {
            error.textContent = "Debe completar todos los campos"; 
            error.style.color = "red"; // mejor visual
        } else {
            error.textContent = "Campos completados correctamente"; 
            error.style.color = "green"; // mejor visual

            formulario.reset(); // limpia el formulario 
        }

    });

});