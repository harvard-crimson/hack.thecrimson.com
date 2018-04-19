function scrollToSection(name) {
  document.querySelector(name).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}
