let botonrojo = document.getElementById("botonrojo"); 
let botonverde = document.getElementById("botonverde"); 
let botonazul = document.getElementById("botonazul"); 

botonrojo.addEventListener("click", function () {
    document.body.style.backgroundColor = "red";
}
)

botonazul.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue"; 

})
botonverde.addEventListener("click", function () {
    document.body.style.backgroundColor = "green"; 
})
