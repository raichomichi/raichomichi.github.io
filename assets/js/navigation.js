const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
});

menuToggle.parentElement.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.offsetWidth && menuToggle.getAttribute('aria-expanded') === 'true') {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  }
});

menuToggle.hidden = false;
