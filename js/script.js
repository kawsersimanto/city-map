const navbar = document.querySelector('.c-navbar');
const navbarToggler = document.querySelector('.navbar-toggler');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});
