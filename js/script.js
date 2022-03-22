// Hamburger
let menu = document.querySelector('#mobile-menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

//Hero Slider --- Home
var heroSlider = new Swiper('.heroSlider', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
