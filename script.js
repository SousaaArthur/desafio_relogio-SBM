// Botões de troca de tema
const buttonSun = document.getElementById("buttonSun");
const buttonMoon = document.getElementById("buttonMoon");

// Botões interativos do relógio
const btnPlay = document.getElementById("play");
const btnPause = document.getElementById("pause");
const btnRestart = document.getElementById("restart");

const root = document.documentElement;

// Textos de tempo do relógio
const textSeconds = document.getElementById("seconds");
const textMinutes = document.getElementById("minutes");
const textHours = document.getElementById("hour");

// Variáveis de tempo inicial
let hours = 23, minutes = 58, seconds = 55,  milliseconds = 1000;
updateTime();

// Armazena o id do setInterval
let idSetInterval;

// Inicia o botão play como false
let playActive = false;

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
  }
});

btnRestart.addEventListener('click', () => {
  resetClock();
  console.log(`O relógio foi resetado!`);
});

function count(){
  seconds++;

  if(seconds >= 60){
    seconds = 0;
    minutes++;
  }
  
  if(minutes >= 60){
    minutes = 0;
    hours++;
  } 
  
  if(hours >= 24){
    resetClock();
  } else {
    updateTime();
  }
}

function startClock(active){
  if(active){
    playActive = true;
    idSetInterval = setInterval(count, milliseconds);
    console.log("SetInterval ID:", idSetInterval);
  } else {
    playActive = false;
    clearInterval(idSetInterval);
  }
}

function resetClock(){
  hours = 0, minutes = 0, seconds = 0;
  updateTime();
}

function updateTime(){
  textSeconds.innerText = seconds.toString().padStart(2, '0');
  textMinutes.innerText = minutes.toString().padStart(2, '0');
  textHours.innerText = hours.toString().padStart(2, '0');
}
