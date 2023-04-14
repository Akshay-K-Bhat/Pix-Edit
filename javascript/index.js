// JavaScript code
const image = document.getElementById('myImage');
let rotation = 0;
let margin = 0;
let elapsedTime = 0;
const animationDuration = 1000; // 2 seconds in milliseconds

const animation = setInterval(() => {
  elapsedTime += 50;
  rotation += 9;
  margin += 5;
  image.style.transform = `rotate(${rotation}deg)`;
  image.style.marginLeft = `${margin}px`;
  if (elapsedTime >= animationDuration) {
    clearInterval(animation);
  }
}, 50);
