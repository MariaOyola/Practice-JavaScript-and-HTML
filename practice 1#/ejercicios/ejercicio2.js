let boton2 = document.getElementById("boton2");

let input1 = document.getElementById("numero1_e2");
let input2 = document.getElementById("numero2_e2");
 
let resultadoText = document.getElementById("resultado2")

boton2.addEventListener("click", function () {

    let numero1 = Number(input1.value);
    let numero2 = Number(input2.value); 
    
    let suma  = numero1 + numero2; 

resultadoText.textContent = "El resultado de la suma es "  + suma; 

})


