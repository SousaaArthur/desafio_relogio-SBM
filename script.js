const buttonSun = document.getElementById("buttonSun");
const buttonMoon = document.getElementById("buttonMoon");
const root = document.documentElement;

const textSeconds = document.getElementById("seconds");
const textMinutes = document.getElementById("minutes");
const textHours = document.getElementById("hour");

let seconds = 0;
let minutes = 0;
let hours = 0;

textSeconds.innerText = seconds.toString().padStart(2, '0');
textMinutes.innerText = minutes.toString().padStart(2, '0');
textHours.innerText = hours.toString().padStart(2, '0');

const btnPlay = document.getElementById("play");
const btnPause = document.getElementById("pause");
const btnRestart = document.getElementById("restart");

/*
  === Night ===
  --bg-blur: rgba(21, 21, 21, 0.35);
  --color-text: #fafafa;
  --main-border: #343434;

  === Day ===
  --bg-blur: rgba(169, 169, 169, 0.35);
  --color-text: #454545;
  --main-border: #b5b5b5;
*/

buttonMoon.addEventListener('click', () => {
  if(!buttonMoon.classList.contains("hidden")){
    buttonMoon.classList.add("hidden");
    buttonSun.classList.remove("hidden");

    root.style.setProperty("--bg-blur", "rgba(169, 169, 169, 0.35)");
    root.style.setProperty("--color-text", "#454545");
    root.style.setProperty("--main-border", "#b5b5b5");

    root.style.setProperty("--bg-image", "url('../assets/day.jpg')");
  }
});

buttonSun.addEventListener('click', () => {
  if(!buttonSun.classList.contains("hidden")){
    buttonSun.classList.add("hidden");
    buttonMoon.classList.remove("hidden");

    root.style.setProperty("--bg-blur", "rgba(21, 21, 21, 0.35)");
    root.style.setProperty("--color-text", "#fafafa");
    root.style.setProperty("--main-border", "#343434");

    root.style.setProperty("--bg-image", "url('../assets/night.png')");
  }
});

// function segundos(){
//   if(seconds >= 60){
//     alert("Tempo acabou");
//     return
//   }
//   seconds++;
//   textSeconds.innerText = seconds;
//   console.log(seconds);
// }

let playActive = false;

btnRestart.addEventListener('click', () => {
  seconds = 0;
  minutes = 0;
  hours = 0;

  textSeconds.innerText = "00";
  textMinutes.innerText = "00";
  textHours.innerText = "00";
});

btnPlay.addEventListener('click', () => {
  if(!playActive){
    startClock(true);
    console.log(`O relógio está: ${playActive}`);
  }
})

btnPause.addEventListener('click', () => {
  if(playActive){
    startClock(false);
    console.log(`O relógio está: ${playActive}`);
  } else {
    alert("O já relógio está pausado")
  }
});

let idSetInterval;

function count(){
  seconds++;
  textSeconds.innerText = seconds.toString().padStart(2, '0');

  if(seconds >= 60){
    seconds = '00';
    textSeconds.innerText = seconds;

    minutes++;
    textMinutes.innerText = minutes.toString().padStart(2, '0');
  }
  if(minutes >= 60){
    minutes = '00';
    textMinutes.innerText = minutes;
    
    hours++;
    textHours.innerText = hours.toString().padStart(2, '0');
  }
  if(hours >= 24){
    hours = '00';
    textHours.innerText = hours;
  }
}

function startClock(active){
  if(active){
    playActive = true;
    idSetInterval = setInterval(count, 1000);
    console.log(idSetInterval);
  } else {
    playActive = false;
    clearInterval(idSetInterval);
  }
}