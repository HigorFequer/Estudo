let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

function prevSlide() {
  slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
  showSlide();
}

function nextSlide() {
  slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
  showSlide();
}

setInterval(nextSlide, 5000); // Auto scroll para o próximo slide a cada 5 segundos
