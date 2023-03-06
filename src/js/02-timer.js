import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    selectedDate = selectedDates[0];
  },
};

const input = document.querySelector('#datetime-picker');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');

startBtn.addEventListener('click', startCount);

flatpickr(input, options);

function startCount() {
  const intervalId = setInterval(() => {
    const dif = selectedDate - Date.now();
    if (dif <= 999) {
      clearInterval(intervalId);
    }
    const objDate = convertMs(dif);
    days.textContent = addLeadingZero(objDate.days);
    hours.textContent = addLeadingZero(objDate.hours);
    minutes.textContent = addLeadingZero(objDate.minutes);
    seconds.textContent = addLeadingZero(objDate.seconds);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(number) {
  return String(number).padStart(2, 0);
}
