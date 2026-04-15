async function setLanguage(lang) {
  // Save selected language
  localStorage.setItem('language', lang);

  try {
    // Load translations
    const response = await fetch(`lang/${lang}.json`);
    const translations = await response.json();

    // Update UI text
    updateContent(translations);

    // Highlight active flag
    document.querySelectorAll('.flag').forEach(img => {
      img.classList.remove('active');
    });

    const selectedFlag = document.querySelector(`#flag-${lang} img`);
    if (selectedFlag) {
      selectedFlag.classList.add('active');
    }

  } catch (error) {
    console.error('Error loading language file:', error);
  }
}

function updateContent(translations) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(el => {
    const attr = el.getAttribute('data-i18n');

    // Case 1: attribute mapping (e.g. "value:send", "placeholder:name")
    if (attr.includes(':')) {
      const [property, key] = attr.split(':');

      if (translations[key]) {
        el[property] = translations[key];
      }
    } 
    // Case 2: default behavior
    else {
      const key = attr;

      if (translations[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = translations[key]; // 👈 handles submit buttons
        } else {
          el.innerHTML = translations[key];
        }
      }
    }
  });
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', async () => {
  const lang = localStorage.getItem('language') || 'es';
  await setLanguage(lang);
});