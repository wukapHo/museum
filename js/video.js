export function setProgressSliders() {
  const time = document.querySelector('#time');
  const sound = document.querySelector('#sound');

  time.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #ffffff ${value}%, white 100%)`
  })

  sound.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #ffffff ${value}%, white 100%)`
  })
}

export function setPlaylistSlider() {
  new Swiper ('.video-section__playlist', {
    navigation: {
      nextEl: '.video-section__playlist-button-next',
      prevEl: '.video-section__playlist-button-prev',
    },
    pagination: {
      el: '.video-section__playlist-pagination',
      clickable: true,
    },
    slidesPerView: 2,
    spaceBetween: 20,
    watchOverFlow: true,
    loop: true,
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 42,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 42,
      },
    },
  })
}
