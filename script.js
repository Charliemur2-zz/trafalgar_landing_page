const menuBtn = document.querySelector('.js-menu-btn');
const navBar = document.querySelector('.js-navbar');
let menuOpen = false;

/* active item on navbar */
let navItem = document.querySelectorAll('.js-navbar__link');
navItem.forEach(item => {
  item.addEventListener('click', function() {
    navItem.forEach(navItem => navItem.classList.remove('navbar__item--active'));
    this.classList.add('navbar__item--active');
  });
});

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navBar.classList.add('navbar--shown');
    menuOpen = true;
    disableScroll();
  } else {
    menuBtn.classList.remove('open');
    navBar.classList.remove('navbar--shown');
    menuOpen = false;
    enableScroll();
  }
});

/* disable and enable srolling */
function disableScroll() {
  document.body.style.overflow = 'hidden';
  document.querySelector('html').scrollTop = window.scrollY;
}

function enableScroll() {
  document.body.style.overflow = null;
}