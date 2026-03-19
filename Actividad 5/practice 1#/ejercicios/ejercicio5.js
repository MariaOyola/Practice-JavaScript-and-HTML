document.addEventListener("DOMContentLoaded", function () {

    let botonlista = document.getElementById("botonlista"); 
    let input5 = document.getElementById("input5"); 
    let lista = document.getElementById("lista"); 

    botonlista.addEventListener("click", function () {

        let texto = input5.value;

        if (texto === "") return; // evita vacíos

        let elemento = document.createElement("li"); 
        elemento.textContent = texto; 

        lista.appendChild(elemento); 
        
        input5.value = ""; // limpia el input 
    });

});