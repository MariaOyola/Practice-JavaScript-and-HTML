let segundos = 0;
let intervalo = null;

function iniciar() {
  if (intervalo !== null) return;

  intervalo = setInterval(() => {
    segundos++;
    document.getElementById("tiemp").textContent = segundos;
  }, 1000);
}

function detener() {
  clearInterval(intervalo);
  intervalo = null;
}

function reiniciar() {
  detener();
  segundos = 0;
  document.getElementById("tiemp").textContent = segundos;
}