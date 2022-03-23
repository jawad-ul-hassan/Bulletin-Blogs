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

// DOM Elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tabcontent');
const darkModeSwitch = document.querySelector('#dark-mode-switch');

// Functions
const activateTab = tabnum => {
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
  });

  document.querySelector('#tab' + tabnum).classList.add('active');
  document.querySelector('#tabcontent' + tabnum).classList.add('active');
};

// Event Listeners
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    activateTab(tab.dataset.tab);
  });
});

// Retrieve stored data

activateTab(opentab);
