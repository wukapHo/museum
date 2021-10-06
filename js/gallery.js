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
  const newImages = sortedPaths.map(item => `<img src="${item}" class="gallery-section__image lazyload" alt="gallery${sortedPaths.indexOf(item) + 1}">`);

  for (let item of newImages) {
    innerContainer.innerHTML += item;
  }
}
