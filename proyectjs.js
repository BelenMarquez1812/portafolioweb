// Obtener el botón para abrir la primera ventana modal
const abrirBoton1 = document.getElementById('abrirModal1');

// Obtener la primera ventana modal
const modal1 = document.getElementById('modal1');

// Obtener el botón para cerrar la primera ventana modal
const cerrarBoton1 = document.getElementById('cerrarModal1');

// Abrir la primera ventana modal al hacer clic en el botón de abrir
abrirBoton1.addEventListener('click', () => {
  modal1.style.display = 'block';
});

// Cerrar la primera ventana modal al hacer clic en el botón de cerrar
cerrarBoton1.addEventListener('click', () => {
  modal1.style.display = 'none';
});

// Cerrar la primera ventana modal al hacer clic fuera de ella (si se desea)
window.addEventListener('click', (event) => {
  if (event.target === modal1) {
    modal1.style.display = 'none';
  }
});

// Obtener el botón para abrir la segunda ventana modal
const abrirBoton2 = document.getElementById('abrirModal2');

// Obtener la segunda ventana modal
const modal2 = document.getElementById('modal2');

// Obtener el botón para cerrar la segunda ventana modal
const cerrarBoton2 = document.getElementById('cerrarModal2');

// Abrir la segunda ventana modal al hacer clic en el botón de abrir
abrirBoton2.addEventListener('click', () => {
  modal2.style.display = 'block';
});

// Cerrar la segunda ventana modal al hacer clic en el botón de cerrar
cerrarBoton2.addEventListener('click', () => {
  modal2.style.display = 'none';
});

// Cerrar la segunda ventana modal al hacer clic fuera de ella (si se desea)
window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
});

// Obtener el botón para abrir la tercera ventana modal
const abrirBoton3 = document.getElementById('abrirModal3');

// Obtener la tercera ventana modal
const modal3 = document.getElementById('modal3');

// Obtener el botón para cerrar la tercera ventana modal
const cerrarBoton3 = document.getElementById('cerrarModal3');

// Abrir la tercera ventana modal al hacer clic en el botón de abrir
abrirBoton3.addEventListener('click', () => {
  modal3.style.display = 'block';
});

// Cerrar la tercera ventana modal al hacer clic en el botón de cerrar
cerrarBoton3.addEventListener('click', () => {
  modal3.style.display = 'none';
});

// Cerrar la tercera ventana modal al hacer clic fuera de ella (si se desea)
window.addEventListener('click', (event) => {
  if (event.target === modal3) {
    modal3.style.display = 'none';
  }
});
