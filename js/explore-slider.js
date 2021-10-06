export function setExploreSlider() {
  const divisor = document.querySelector('.explore-section__image-divisor');
  const handle = document.querySelector('.explore-section__image-handle');
  const slider = document.querySelector('.explore-section__image-slider');

  function moveDivisor() {
    handle.style.left = slider.value + "%";
    divisor.style.width = slider.value + "%";
  }

  slider.addEventListener('input', moveDivisor);
}
