async function setLanguage(lang) {
  localStorage.setItem('language', lang);

  // Load translations
  const response = await fetch(`lang/${lang}.json`);
  const translations = await response.json();
  updateContent(translations);

  // Highlight the active flag
  document.querySelectorAll('.flag').forEach(img => {
    img.classList.remove('active');
  });
  const selectedFlag = document.querySelector(`#flag-${lang} img`);
  if (selectedFlag) {
    selectedFlag.classList.add('active');
  }
}

function updateContent(translations) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const lang = localStorage.getItem('language') || 'es';
  await setLanguage(lang); // This now handles loading + flag highlight
});

