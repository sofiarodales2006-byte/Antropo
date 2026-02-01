const celdas = document.querySelectorAll('.celda');

celdas.forEach(celda => {
  celda.addEventListener('click', () => {
    celda.style.background = '#ffd6a5';
    celda.innerText = '✔';
  });
});
