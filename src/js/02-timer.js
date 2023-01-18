
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      
        if (selectedDates[0] <= new Date()) { 
          Notiflix.Notify.failure("Please choose a date in the future");
          startBtn.disabled = true;
          return;
        }
      startBtn.disabled = false;
  }
}

flatpickr(input, options);


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero( Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
  
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
 }


startBtn.addEventListener('click', reverceTimer);

   function reverceTimer() {
   const timerId = setInterval(() => {
    let deltaTime = new Date(input.value) - new Date();
           startBtn.disabled = true;
           let timeComponents = convertMs(deltaTime);
           console.log(timeComponents);
           showTimer(timeComponents);
       if (deltaTime <= 1000) {
           startBtn.disabled = false;
           clearInterval(timerId);
        } 
    }, 1000)
    
 } 

function showTimer({ days, hours, minutes, seconds }) { 
          daysSpan.textContent = days;
           hoursSpan.textContent = hours;
           minutesSpan.textContent = minutes;
           secondsSpan.textContent = seconds;
}


    


 