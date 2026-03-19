document.addEventListener("DOMContentLoaded", function () {

    let botonCalcular = document.getElementById("botonCalcular");

    botonCalcular.addEventListener("click", function () {

        let opcion = prompt("Escribe: suma, resta, multiplicar o dividir");
        let numero1 = Number(document.getElementById("numero1_e7").value);
        let numero2 = Number(document.getElementById("numero2_e7").value);
        let resultado = document.getElementById("resultado7");

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
                if (numero2 === 0) {
                    resultado.textContent = "No se puede dividir entre 0";
                } else {
                    resultado.textContent = "Resultado: " + (numero1 / numero2);
                }
                break;

            default:
                resultado.textContent = "Escribe bien la opción";
        }

    });

});