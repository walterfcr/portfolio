const projectImages = ['proyecto1', 'proyecto2', 'proyecto3', 'proyecto4', 'proyecto5', 'proyecto6'];

function setTheme(mode) {
  document.body.classList.toggle('dark-mode', mode === 'dark');
  localStorage.setItem('theme', mode);

  // Cambiar imágenes estáticas
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
    carro1On: document.querySelector('.on'),
    carro1Off: document.querySelector('.off'),
    carro2On: document.querySelector('.on2'),
    carro2Off: document.querySelector('.off2'),
    logo: document.querySelector('.logo'),
    logo4: document.querySelector('.logo4'),
    logo5: document.querySelector('.logo5'),
    logo8: document.querySelector('.logo8')
  };

  if (mode === 'dark') {
    if (elements.floating1) elements.floating1.src = 'img/dark-floating1.webp';
    if (elements.floating2) elements.floating2.src = 'img/dark-floating2.webp';
    if (elements.estatico1) elements.estatico1.src = 'img/estatico-6.png';
    if (elements.estatico2) elements.estatico2.src = 'img/estatico-7.webp';
    if (elements.estatico3) elements.estatico3.src = 'img/estatico-8.png';
    if (elements.estatico4) elements.estatico4.src = 'img/estatico-9.png';
    if (elements.estatico5) elements.estatico5.src = 'img/estatico-10.png';
    if (elements.mountain) elements.mountain.src = 'img/city-dark.webp';
    if (elements.flecha) elements.flecha.src = 'img/flecha-dark.png';
    if (elements.carro1On) elements.carro1On.src = 'img/car1-dark-on.webp';
    if (elements.carro1Off) elements.carro1Off.src = 'img/car1-dark-off.webp';
    if (elements.carro2On) elements.carro2On.src = 'img/car2-dark-on.webp';
    if (elements.carro2Off) elements.carro2Off.src = 'img/car2-dark-off.webp';
    if (elements.logo) elements.logo.src = 'img/logo-portfolio-dark.png';
    if (elements.logo4) elements.logo4.src = 'img/logo-004-d.webp';
    if (elements.logo5) elements.logo5.src = 'img/logo-005-d.webp';
    if (elements.logo8) elements.logo8.src = 'img/logo-008-d.webp';
  } else {
    if (elements.floating1) elements.floating1.src = 'img/light-floating1.png';
    if (elements.floating2) elements.floating2.src = 'img/light-floating2.png';
    if (elements.estatico1) elements.estatico1.src = 'img/estatico-1.webp';
    if (elements.estatico2) elements.estatico2.src = 'img/estatico-2.webp';
    if (elements.estatico3) elements.estatico3.src = 'img/estatico-3.webp';
    if (elements.estatico4) elements.estatico4.src = 'img/estatico-4.webp';
    if (elements.estatico5) elements.estatico5.src = 'img/estatico-5.png';
    if (elements.mountain) elements.mountain.src = 'img/city-light.webp';
    if (elements.flecha) elements.flecha.src = 'img/flecha-light.png';
    if (elements.carro1On) elements.carro1On.src = 'img/car1-light-on.webp';
    if (elements.carro1Off) elements.carro1Off.src = 'img/car1-light-off.webp';
    if (elements.carro2On) elements.carro2On.src = 'img/car2-light-on.webp';
    if (elements.carro2Off) elements.carro2Off.src = 'img/car2-light-off.webp';
    if (elements.logo) elements.logo.src = 'img/logo-portfolio-light.png';
    if (elements.logo4) elements.logo4.src = 'img/logo-004.webp';
    if (elements.logo5) elements.logo5.src = 'img/logo-005.webp';
    if (elements.logo8) elements.logo8.src = 'img/logo-008.webp';
  }

  // Cambiar imágenes de proyectos con data-img
  const suffix = mode === 'dark' ? '-dark.webp' : '-light.webp';
  projectImages.forEach(project => {
    document.querySelectorAll(`[data-img="${project}"]`).forEach(img => {
      img.src = `img/${project}${suffix}`;
    });
  });
}

// Solo un DOMContentLoaded para todo
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.checked = savedTheme === 'dark';
    toggle.addEventListener('change', () => {
      setTheme(toggle.checked ? 'dark' : 'light');
    });
  }
});
