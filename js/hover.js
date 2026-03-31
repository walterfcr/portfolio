function getCurrentTheme() {
  return document.body.classList.contains('dark-mode')
    ? 'dark'
    : 'light';
}

document.querySelectorAll('.skill-icon, .skill-icon-2').forEach(icon => {

  const setIcon = (hover = false) => {
    const theme = getCurrentTheme();
    const key = hover ? `${theme}Hover` : theme;

    if (icon.dataset[key]) {
      icon.src = icon.dataset[key];
    }
  };

  // estado inicial
  setIcon(false);

  icon.addEventListener('mouseenter', () => setIcon(true));
  icon.addEventListener('mouseleave', () => setIcon(false));

  // 👇 OBSERVA CAMBIOS DE THEME (SIN TOCAR EL JS DEL THEME)
  const observer = new MutationObserver(() => {
    // si el mouse está encima, reaplica hover correcto
    if (icon.matches(':hover')) {
      setIcon(true);
    } else {
      setIcon(false);
    }
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  });
});
