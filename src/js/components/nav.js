const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.menu-dropdown');
const overlay = document.querySelector('.overlay');
const burgerMenu = document.querySelector('.burger-menu');
const pageBody = document.querySelector('.page__body');
const searchInput = document.querySelector('.search-input');

function openMenu() {
  burgerIcon.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  pageBody.classList.toggle('page__body--overflow-hidden');
}

function closeMenu() {
  burgerIcon.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
  pageBody.classList.remove('page__body--overflow-hidden');
}

burgerMenu.addEventListener('click', function () {
  window.scrollTo(0, 0);

  const isActive = burgerIcon.classList.contains('active');

  openMenu();

  if (isActive) {
    closeMenu();
  }
});

overlay.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
    closeMenu();
  }
});

searchInput.addEventListener('click', function () {
  const isActive = burgerIcon.classList.contains('active');

  if (isActive) {
    closeMenu();
  }
});
