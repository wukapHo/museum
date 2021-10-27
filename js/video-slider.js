export function setPlaylistSlider() {
  const pathsVideo = [
    './assets/video/video0.mp4',
    './assets/video/video1.mp4',
    './assets/video/video2.mp4',
    './assets/video/video3.mp4',
    './assets/video/video4.mp4',
  ];
  const pathsPosters = [
    './assets/video/poster0.jpg',
    './assets/video/poster1.jpg',
    './assets/video/poster2.jpg',
    './assets/video/poster3.jpg',
    './assets/video/poster4.jpg',
  ]

  const videoSwiper = new Swiper ('.video-section__playlist', {
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

  const mainVideo = document.querySelector('.video-section__player');
  const mainVideoProgress = document.querySelector('#time');
  const buttonPlay = document.querySelector('.video-section__player-icon');

  videoSwiper.on('activeIndexChange', () => {
    const index = videoSwiper.realIndex;
    mainVideo.setAttribute('src', `${pathsVideo[index]}`);
    mainVideo.setAttribute('poster', `${pathsPosters[index]}`);
    // mainVideoProgress.value = 0;
    // mainVideo.currentTime = 0;
    if (buttonPlay.classList.contains('hide')) {
      buttonPlay.classList.toggle('hide');
    }
  })

  const secondaryVideos = document.querySelectorAll('.video-section__playlist-item');

  secondaryVideos.forEach(video => video.addEventListener('click', () => {
    for (let item of secondaryVideos) {
      item.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    // video.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
    // video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }))
}
