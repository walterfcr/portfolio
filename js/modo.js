function setTheme(mode) {
  const body = document.body;
  body.classList.toggle('dark-mode', mode === 'dark');

  // Store theme preference
  localStorage.setItem('theme', mode);

  // Element selectors
  const elements = {
    floating1: document.querySelector('.floating-1'),
    floating2: document.querySelector('.floating-2'),
    estatico1: document.querySelector('.estatico-1'),
    estatico2: document.querySelector('.estatico-2'),
    estatico3: document.querySelector('.estatico-3'),
    estatico4: document.querySelector('.estatico-4'),
    estatico5: document.querySelector('.estatico-5'),
    mountain: document.querySelector('.mountain-image'),
    flecha: document.querySelector('.flecha'),
    logo: document.querySelector('.logo')
  };

  if (mode === 'dark') {
    if (elements.floating1) elements.floating1.src = 'img/dark-floating1.webp';
    if (elements.floating2) elements.floating2.src = 'img/dark-floating2.webp';
    if (elements.estatico1) elements.estatico1.src = 'img/estatico-6.png';
    if (elements.estatico2) elements.estatico2.src = 'img/estatico-7.webp';
    if (elements.estatico3) elements.estatico3.src = 'img/estatico-8.png';
    if (elements.estatico4) elements.estatico4.src = 'img/estatico-9.png';
    if (elements.estatico5) elements.estatico5.src = 'img/estatico-10.png';
    if (elements.mountain) elements.mountain.src = 'img/city-dark.png';
    if (elements.flecha) elements.flecha.src = 'img/flecha-dark.png';
    if (elements.logo) elements.logo.src = 'img/logo-portfolio-dark.png';
  } else {
    if (elements.floating1) elements.floating1.src = 'img/light-floating1.png';
    if (elements.floating2) elements.floating2.src = 'img/light-floating2.png';
    if (elements.estatico1) elements.estatico1.src = 'img/estatico-1.webp';
    if (elements.estatico2) elements.estatico2.src = 'img/estatico-2.webp';
    if (elements.estatico3) elements.estatico3.src = 'img/estatico-3.webp';
    if (elements.estatico4) elements.estatico4.src = 'img/estatico-4.webp';
    if (elements.estatico5) elements.estatico5.src = 'img/estatico-5.png';
    if (elements.mountain) elements.mountain.src = 'img/city-light.png';
    if (elements.flecha) elements.flecha.src = 'img/flecha-light.png';
    if (elements.logo) elements.logo.src = 'img/logo-portfolio-light.png';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.checked = savedTheme === 'dark';
  }
});

function handleThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const newTheme = toggle.checked ? 'dark' : 'light';
  setTheme(newTheme);
}




