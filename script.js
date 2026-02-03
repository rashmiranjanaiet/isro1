const fgVideo = document.querySelector('.fg-video');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const move = x * 120;

  fgVideo.style.transform = `translateX(calc(-50% + ${move}px))`;
});
