let botonlista = document.getElementById ("botonlista"); 
let input = document.getElementById("input"); 
let lista = document.getElementById("lista"); 


botonlista.addEventListener("click", function () {

    let texto = input.value; 
    let elemento = document.createElement("li"); 

elemento.textContent = texto; 
lista.appendChild(elemento); 
    
})
