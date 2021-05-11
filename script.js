const header = document.querySelector('.js-header');
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

/* scrolled menu */
window.onscroll = function() {
  if(window.pageYOffset > 80) {
    if(!scrolled) {
      header.style.transform = 'translateY(-130px)';
    }
    setTimeout(function() {
      header.style.transform = 'translate(0)';
      scrolled = true;
    }, 700)
  } else {
    scrolled = false;
  }
};

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