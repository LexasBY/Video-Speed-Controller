const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
  const y = e.pageY - this.offsetTop; // (returns the Y (vertical) coordinate in pixels of the event relative to the whole document) - (offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element)
  const percent = y / this.offsetHeight; // y / (offsetHeight - viewable height of an element in pixels)
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%'; // Math.round() Math.round() function returns the value of a number rounded to the nearest integer.
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + '×'; //(toFixed() method formats a number using fixed-point notation.)
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);