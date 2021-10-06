export function openBurger() {
  const burgerButton = document.querySelector('.header__burger');
  const burgerMenu = document.querySelector('.burger-menu');
  const title = document.querySelector('.welcome-section__title');
  const subtitle = document.querySelector('.welcome-section__subtitle');
  const buttonDiscover = document.querySelector('.welcome-section__button');
  const burgerLinks = document.querySelectorAll('.burger-menu__nav-link');

  burgerButton.addEventListener('click', openMenu);
  burgerLinks.forEach(item => item.addEventListener('click', openMenu));

  function openMenu() {
    burgerButton.classList.toggle('header__burger--open');
    burgerMenu.classList.toggle('burger-menu--hide');
    title.classList.toggle('welcome-section__title--hide');
    subtitle.classList.toggle('welcome-section__subtitle--hide');
    buttonDiscover.classList.toggle('welcome-section__button--hide');
  }
}
