const menuBtn = document.querySelector('.js-menu-btn');
const navBar = document.querySelector('.js-navbar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navBar.classList.add('navbar--shown');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navBar.classList.remove('navbar--shown');
    menuOpen = false;
  }
});