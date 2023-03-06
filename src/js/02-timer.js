import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const startBtn = document.querySelector('[data-start]');

startBtn.addEventListener('click', startCount);


