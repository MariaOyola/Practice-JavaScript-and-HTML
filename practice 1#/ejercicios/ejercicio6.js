let formulario = document.getElementById("formulario"); 

let nombre = document.getElementById ("nombre"); 
let edad = document.getElementById ("edad"); 
let correo = document.getElementById ("correo"); 
let error = document.getElementById ("error"); 

 formulario.addEventListener("submit", function (event) {

    event.preventDefault(); 
    // Evita que la página se recargue
    
    if (nombre.value === "" || edad.value === "" || correo.value === "") {

        error.textContent ="Debe completar todos los campos"; 

    } else {
        error.textContent = "los campos fueron completados correcctamente"; 
    }


 })

