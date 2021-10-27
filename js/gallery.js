export function setGallery() {
  const innerContainer = document.querySelector('.gallery-inner-container');
  const pathsToImages = ['./assets/img/galery1.jpg', './assets/img/galery2.jpg', './assets/img/galery3.jpg', './assets/img/galery4.jpg', './assets/img/galery5.jpg',
                        './assets/img/galery6.jpg', './assets/img/galery7.jpg', './assets/img/galery8.jpg', './assets/img/galery9.jpg', './assets/img/galery10.jpg',
                        './assets/img/galery11.jpg', './assets/img/galery12.jpg', './assets/img/galery13.jpg', './assets/img/galery14.jpg', './assets/img/galery15.jpg'];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const sortedPaths = shuffleArray(pathsToImages);
  const newImages = sortedPaths.map(item => `<img src="${item}" class="gallery-section__image align-bottom slide-in lazyload" alt="gallery${sortedPaths.indexOf(item) + 1}">`);

  for (let item of newImages) {
    innerContainer.innerHTML += item;
  }
}

export function viewImages() {
  const galleryImages = document.querySelectorAll('.gallery-section__image');
  const galleryContainer = document.querySelector('.gallery-container');

  const viewElemAt = galleryContainer.getBoundingClientRect().top;
  window.addEventListener('scroll', () =>  debounce(checkImages(galleryImages, viewElemAt), 20, true));

  function checkImages(elems, viewElemAt) {
    let minY = 0;
    let maxY = window.innerHeight * 75 / 100;

    for (let i = 0; i < elems.length; i++) {
      viewElemAt = elems[i].getBoundingClientRect().top;

      if (viewElemAt > minY && viewElemAt < maxY) {
        elems[i].classList.add('active');
      } else if (elems[i].getBoundingClientRect().top > window.innerHeight) {
        elems[i].classList.remove('active');
      }
    }
  }

  checkImages(galleryImages, viewElemAt);

  function debounce(func, wait, immediate) {
    let timeout;

    return function executedFunction() {
      const context = this;
      const args = arguments;

      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  };
}
