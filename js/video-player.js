export function setProgressSliders() {
  const time = document.querySelector('#time');
  const sound = document.querySelector('#sound');

  time.addEventListener('input', colorBackground);
  sound.addEventListener('input', colorBackground);

  function colorBackground() {
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value}%, #ffffff ${this.value}%, white 100%)`
  }
}

export function setVideoPlayer() {
  const player = document.querySelector('.video-section__player-wrapper');
  const video = document.querySelector('.video-section__player');
  const buttonPlay = document.querySelector('.video-section__player-icon');
  const buttonToggle = document.querySelector('#toggle');
  const iconToggle = document.querySelector('.video-section__status-bar-item--play');
  const progressBar = document.querySelector('#time');
  const buttonSound = document.querySelector('#sound-button');
  const soundBar = document.querySelector('#sound');
  const soundBarIcon = document.querySelector('.video-section__status-bar-item--sound');
  const buttonFullscreen = document.querySelector('#fullscreen');
  const buttonFullscreenIcon = document.querySelector('.video-section__status-bar-item--fullscreen');
  const playbackRateField = document.querySelector('.video-section__playback-rate');

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', progressVideo);

  buttonPlay.addEventListener('click', togglePlay);
  buttonToggle.addEventListener('click', togglePlay);

  progressBar.addEventListener('click', handleProgress);

  buttonSound.addEventListener('click', toggleMuteVideo);
  soundBar.addEventListener('input', handleSound);

  buttonFullscreen.addEventListener('click', toggleFullscreen);

  window.addEventListener('click', toggleFocusVideo);

  function toggleFocusVideo(e) {
    if (e.target.classList.contains('video-section__player-wrapper') ||
        e.target.parentElement.classList.contains('video-section__player-wrapper') ||
        e.target.parentElement.parentElement.classList.contains('video-section__player-wrapper') ||
        e.target.parentElement.parentElement.parentElement.classList.contains('video-section__player-wrapper')) {
      window.addEventListener('keydown', useKeyboard);
    } else {
      window.removeEventListener('keydown', useKeyboard);
    }
  }

  function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  function updateButton() {
    buttonPlay.classList.toggle('hide');

    if (video.paused) {
      iconToggle.setAttribute('src', './assets/svg/play-icon.svg');
    } else {
      iconToggle.setAttribute('src', './assets/svg/pause-icon.svg');
    }
  }

  function handleProgress(e) {
    video.currentTime = (e.offsetX / this.offsetWidth) * video.duration;
  }

  function progressVideo() {
    progressBar.value = video.currentTime / video.duration * 100;
    progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressBar.value}%, #ffffff ${progressBar.value}%, #ffffff 100%)`
  }

  function handleSound() {
    video.volume = soundBar.value / 100;

    if (video.muted) {
      video.muted = false;
      video.volume = soundBar.value / 100;
    }

    if (video.volume === 0) {
      soundBarIcon.setAttribute('src', './assets/svg/mute-icon.svg');
    } else {
      soundBarIcon.setAttribute('src', './assets/svg/sound-icon.svg');
    }
  }

  function toggleMuteVideo() {
    if (video.muted) {
      video.muted = false;
      soundBar.value = video.volume * 100;
      soundBarIcon.setAttribute('src', './assets/svg/sound-icon.svg');
    } else {
      video.muted = true;
      soundBar.value = 0;
      soundBarIcon.setAttribute('src', './assets/svg/mute-icon.svg');
    }
    soundBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${soundBar.value}%, #ffffff ${soundBar.value}%, #ffffff 100%)`
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      player.requestFullscreen();
      buttonFullscreenIcon.setAttribute('src', './assets/svg/fullscreen-exit-icon.svg');
    } else {
      document.exitFullscreen();
      buttonFullscreenIcon.setAttribute('src', './assets/svg/fullscreen-icon.svg');
    }
  };

  function useKeyboard(e) {
    if (e.code === 'KeyM') {
      toggleMuteVideo();
    } else if (e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if (e.code === 'KeyF') {
      toggleFullscreen();
    } else if (e.shiftKey && e.code === 'Period') {
      video.playbackRate += 0.25;
      playbackRateField.textContent = `${video.playbackRate}x`;
      playbackRateField.classList.toggle('video-section__playback-rate--hide');
      setTimeout(() => {
        playbackRateField.classList.toggle('video-section__playback-rate--hide');
      }, 700);
    } else if (e.shiftKey && e.code === 'Comma') {
      video.playbackRate -= 0.25;
      playbackRateField.textContent = `${video.playbackRate}x`;
      playbackRateField.classList.toggle('video-section__playback-rate--hide');
      setTimeout(() => {
        playbackRateField.classList.toggle('video-section__playback-rate--hide');
      }, 700);
    }
  }

  handleSound();
}
