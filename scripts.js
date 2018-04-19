function scrollToSection(name) {
  document.querySelector(name).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}

$(window).scroll(function() {
  if ($(window).scrollTop() !== 0) {
    $('.navbar').addClass('scrolled');
  } else {
    $('.navbar').removeClass('scrolled');
  }
});
