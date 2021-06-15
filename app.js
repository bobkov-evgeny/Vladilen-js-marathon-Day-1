const slides = document.querySelectorAll('.slide')
const clearActive = () => slides.forEach(slide => slide.classList.remove('active'));



slides.forEach(slide => slide.addEventListener('click', function(e) {
  clearActive();
  e.target.classList.add('active');
}));