/*jshint esversion: 6 */
const actual = document.querySelector('#actual');
const imgs = document.querySelectorAll('.img__resto img');
const opacity = 0.6;

// Ajustar la opacidad de la primera imagen al cargar la página
imgs[0].style.opacity = opacity;
// Todas las miniaturas ejecutan la función 'imgClick' al hacer click
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Resetea la opacidad de todas las imágenes
  imgs.forEach(img => (img.style.opacity = 1));
  // Cambia la imagen actual por la imagen en la que se hace click
  actual.src = e.target.src;
  // Añade la clase 'fade-in'
  actual.classList.add('fade-in');
  // Quita la clase fade-in después de .5 segundos
  setTimeout(() => actual.classList.remove('fade-in'), 500);
  // Cambia la opacidad por el valor de la const 'opacity'
  e.target.style.opacity = opacity;
}
