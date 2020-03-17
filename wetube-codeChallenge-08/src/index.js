

const playBtn = document.getElementById("playBtn");
const videoPlayer = document.getElementById("jsVideoPlayer");
const muteBtn = document.getElementById("muteBtn");
const volumeRange = document.getElementById("volumeRange");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeSlider = document.getElementById("time-slider");
const videoController = document.getElementById("videoplayerControl");
const container = document.getElementById("container");

function handlePlayBtn() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}
function handleKeyDown(event) {
  if (event.keyCode === 32) {
    playBtn.click();
  }
}
function handleMuteBtn() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    volumeRange.value = videoPlayer.volume;
  } else {
    videoPlayer.muted = true;
    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    volumeRange.value = 0;
  }
}
function handleVideoEnded() {
  videoPlayer.currentTime = 0;
  videoPlayer.play();
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}
function formatDate(seconds) {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
}
function getCurrentTime() {
  currentTime.innerHTML = formatDate(videoPlayer.currentTime);
  timeSlider.value = videoPlayer.currentTime;
}
function setTotalTime() {
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
  timeSlider.max = videoPlayer.duration;
  setInterval(getCurrentTime, 1000);
}
function handleTimeSlider() {
  videoPlayer.currentTime = timeSlider.value;
}

function handleMouseMove() {
  showController();
}

let timeOut;
function showController() {
  videoPlayer.style.cursor = 'default';
  videoController.style.opacity = '1';
  clearTimeout(timeOut);
  timeOut = setTimeout(hideController, 3000);
}

function hideController() {
  videoPlayer.style.cursor = 'none';
  videoController.style.opacity = '0';
}

function init() {
  console.log("here");
  playBtn.addEventListener("click", handlePlayBtn);
  window.addEventListener("keydown", handleKeyDown);
  muteBtn.addEventListener("click", handleMuteBtn);
  videoPlayer.addEventListener("ended", handleVideoEnded);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  timeSlider.addEventListener("change", handleTimeSlider);
  container.addEventListener("mousemove", handleMouseMove);
}

init();
