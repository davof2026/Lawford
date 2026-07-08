const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const slides = Array.from(document.querySelectorAll('.hero-slide'));
let activeIndex = 0;

if (slides.length) {
  const rotateSlides = () => {
    slides[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add('active');
  };

  setInterval(rotateSlides, 6000);
}
