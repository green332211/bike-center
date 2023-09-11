const burgerMobileIcon = document.querySelector('.burger-mobile-icon');
const menuMobile = document.querySelector('.menu-mobile-dropdown');
const overlay = document.querySelector('.overlay');
const burgerMobileMenu = document.querySelector('.burger-mobile-menu');
const pageBody = document.querySelector('.page__body');
const thirdButton = document.querySelector(
  '.menu-mobile__buttons-item.hidden-button'
);

function openMobileMenu() {
  burgerMobileIcon.classList.toggle('active');
  menuMobile.classList.toggle('active');
  overlay.classList.toggle('active');
  pageBody.classList.toggle('page__body--overflow-hidden');
  thirdButton.classList.toggle('hidden-button');
}

function closeMobileMenu() {
  burgerMobileIcon.classList.remove('active');
  menuMobile.classList.remove('active');
  overlay.classList.remove('active');
  pageBody.classList.remove('page__body--overflow-hidden');
  thirdButton.classList.toggle('hidden-button');
}

burgerMobileMenu.addEventListener('click', function () {
  window.scrollTo(0, 0);

  const isActive = burgerMobileIcon.classList.contains('active');

  openMobileMenu();

  if (isActive) {
    closeMenu();
  }
});

overlay.addEventListener('click', function (event) {
  if (
    !burgerMobileMenu.contains(event.target) &&
    !burgerMobileMenu.contains(event.target)
  ) {
    closeMobileMenu();
  }
});
