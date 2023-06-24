const pauseBtn = document.querySelector(".pause")
const startBtn = document.querySelector(".play")
const stopBtn = document.querySelector(".stop")
const timerDisplay = document.querySelector(".timer")
let interval;
let timeLeft = 1500;

//functions 
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;

    timerDisplay.innerHTML = formattedTime;
  }
  
  function startTimer() {
   
    interval = setInterval(() => {
      timeLeft--;
      updateTimer();
    
    }, 1000);
  }

  function stopTimer() {
    clearInterval(interval);
  }
  function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
  }

  

//event listeneers 

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
stopBtn.addEventListener("click", resetTimer);
