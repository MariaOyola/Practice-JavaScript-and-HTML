let botonCalcular = document.getElementById("botonCalcular");

botonCalcular.addEventListener("click", function () {

    let opcion = prompt("Escribe: suma, resta, multiplicar o dividir");

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    let resultado = document.getElementById("resultado");

    switch (opcion) {

        case "suma":
            resultado.textContent = "Resultado: " + (numero1 + numero2);
            break;

        case "resta":
            resultado.textContent = "Resultado: " + (numero1 - numero2);
            break;

        case "multiplicar":
            resultado.textContent = "Resultado: " + (numero1 * numero2);
            break;

        case "dividir":
            resultado.textContent = "Resultado: " + (numero1 / numero2);
            break;

        default:
            resultado.textContent = "Escribe bien la opción";
    }

});