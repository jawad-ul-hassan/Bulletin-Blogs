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
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Business-Tabs Functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tabcontent');

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

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    activateTab(tab.dataset.tab);
  });
});

// Business-Tabs Functionality
const tabsHealth = document.querySelectorAll('.tabHealth');
const tabContentsHealth = document.querySelectorAll('.tabcontent-health');

const activateHealthTab = tabnum => {
  tabsHealth.forEach(tab => {
    tab.classList.remove('active');
  });

  tabContentsHealth.forEach(tabContent => {
    tabContent.classList.remove('active');
  });

  document.querySelector('#tab' + tabnum).classList.add('active');
  document.querySelector('#tabcontent' + tabnum).classList.add('active');
};

tabsHealth.forEach(tab => {
  tab.addEventListener('click', () => {
    activateHealthTab(tab.dataset.tab);
  });
});
