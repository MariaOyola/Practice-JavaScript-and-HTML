document.addEventListener("DOMContentLoaded", function () {

    const botonRojo = document.getElementById("botonrojo");
    const botonVerde = document.getElementById("botonverde");
    const botonAzul = document.getElementById("botonazul");

    const contenedor = document.querySelector(".contenido");

    botonRojo.addEventListener("click", () => {
        contenedor.style.backgroundColor = "red";
    });

    botonVerde.addEventListener("click", () => {
        contenedor.style.backgroundColor = "green";
    });

    botonAzul.addEventListener("click", () => {
        contenedor.style.backgroundColor = "blue";
    });

});