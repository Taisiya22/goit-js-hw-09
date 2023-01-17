function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);


function onStartClick(e) { 
  timerId = setInterval(onStartClick, 1000);
  body.style.backgroundColor = getRandomHexColor();
  // localStorage.setItem('current-color', JSON.stringify(body.style.backgroundColor))
  
onDisabledStart();
}

  function onDisabledStart() {
if (onStartClick) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  };
}

function onStopClick(e) {
  clearInterval(timerId);
  onDisabledStop()
  }
  // body.style.backgroundColor = localStorage.getItem('current-color');
 
 

function onDisabledStop() {
if(onStopClick) { 
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}

 


