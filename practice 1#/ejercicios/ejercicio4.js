let botonContador = document.getElementById("botonContador"); 
let texto = document.getElementById("contador");

let contador = 0; 

botonContador.addEventListener("click", function () {
    contador = contador + 1; 
    
    texto.textContent = contador; 
})