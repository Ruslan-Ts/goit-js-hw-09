const startColorBtn = document.querySelector('[data-start]');
const stopColorBtn = document.querySelector('[data-stop]');

startColorBtn.addEventListener('click', startColor);
stopColorBtn.addEventListener('click', stopColor);

let timerId = null;
stopColorBtn.disabled = true;

function startColor() {
  stopColorBtn.disabled = false;
  timerId = setInterval(() => {
    changeColor();
  }, 1000);
  startColorBtn.setAttribute('disabled', true);
}

function stopColor() {
  stopColorBtn.disabled = true;
  clearInterval(timerId);
  startColorBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
}
