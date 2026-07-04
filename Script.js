var hamburger = document.getElementById('hamburger');
var navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('open');
});

var navLinks = document.querySelectorAll('.nav-link');
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    navMenu.classList.remove('open');
  });
}