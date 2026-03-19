function mostrar(num) {
  document.querySelectorAll('.ejercicio').forEach(e => e.classList.remove('active'));
  document.getElementById('ej' + num).classList.add('active');
}
