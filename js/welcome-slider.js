export function setWelcomeSlider() {
  const currentFraction = document.querySelector('.welcome-section__slider-fraction-current');
  const totalFraction = document.querySelector('.welcome-section__slider-fraction-total');
  const slides = document.querySelectorAll('.welcome-section__slider-item');

  const welcomeSlider = new Swiper('.welcome-section__slider', {
    navigation: {
      nextEl: '.welcome-section__slider-button-next',
      prevEl: '.welcome-section__slider-button-prev',
    },
    pagination: {
      el: '.welcome-section__slider-pagination',
      clickable: true,
    },
    loop: true,
  });

  welcomeSlider.on('activeIndexChange', () => {
    const index = welcomeSlider.realIndex;
    const total = slides.length;
    currentFraction.textContent = `0${index + 1}`;
    totalFraction.textContent = `0${total}`;
  })
}
