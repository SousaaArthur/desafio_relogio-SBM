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
const theme = localStorage.getItem('theme');

// Variáveis de tempo inicial
let hours = 23, minutes = 58, seconds = 55,  milliseconds = 1000;

// Chamada de funções
updateTime();
switchTheme(theme);
console.log(`Página iniciada com o tema: ${theme}`)
// applyThemeByHour(hours);

// Inicia o botão play como false
let playActive = false;

// Armazena o id do setInterval
let idSetInterval;

buttonMoon.addEventListener('click', () => {
  switchTheme('light');
});

buttonSun.addEventListener('click', () => {
  switchTheme('night');
});

btnPlay.addEventListener('click', () => {
  verifyButton(playActive, 'play');
})

btnPause.addEventListener('click', () => {
  verifyButton(playActive, 'pause');
});

btnRestart.addEventListener('click', () => {
  resetClock();
});

function switchTheme(theme = null){
    if(theme === 'light'){
    buttonMoon.classList.add("hidden");
    buttonSun.classList.remove("hidden");

    root.style.setProperty("--bg-blur", "rgba(169, 169, 169, 0.35)");
    root.style.setProperty("--color-text", "#454545");
    root.style.setProperty("--main-border", "#b5b5b5");

    root.style.setProperty("--bg-image", "url('../assets/day.jpg')");

    localStorage.setItem('theme', 'light');
    console.log(`Tema alterado para: ${theme}`);
  } else {
    buttonSun.classList.add("hidden");
    buttonMoon.classList.remove("hidden");

    root.style.setProperty("--bg-blur", "rgba(21, 21, 21, 0.35)");
    root.style.setProperty("--color-text", "#fafafa");
    root.style.setProperty("--main-border", "#343434");

    root.style.setProperty("--bg-image", "url('../assets/night.png')");

    localStorage.setItem('theme', 'night');
    console.log(`Tema alterado para: ${theme}`);
  }
}

function verifyButton(value, type){
  if(!value && type === 'play'){
    startClock(true);

    btnPlay.classList.add("inative");
    btnPause.classList.remove("inative");

    console.log(`O relógio está: ${playActive ? 'Ativo' : 'Desativado'}`);
  } else if(value && type === 'pause'){
    startClock(false);

    btnPause.classList.add("inative");
    btnPlay.classList.remove("inative");

    console.log(`O relógio está: ${playActive ? 'Ativo' : 'Desativado'}`);
  }
}

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

  // applyThemeByHour(hours);

  if(hours >= 24){
    resetClock();
  } else {
    updateTime();
  }
}

// function applyThemeByHour(hours){
//     if(hours >= 6 && hours < 14){
//     root.style.setProperty("--bg-blur", "rgba(169, 169, 169, 0.35)");
//     root.style.setProperty("--color-text", "#454545");
//     root.style.setProperty("--main-border", "#b5b5b5");

//     root.style.setProperty("--bg-image", "url('../assets/day.jpg')");
//   } else if (hours >= 14 && hours < 19){
//     root.style.setProperty("--bg-image", "url('../assets/afternoon.png')");
//   } else if (hours >= 19){
//     root.style.setProperty("--bg-blur", "rgba(21, 21, 21, 0.35)");
//     root.style.setProperty("--color-text", "#fafafa");
//     root.style.setProperty("--main-border", "#343434");

//     root.style.setProperty("--bg-image", "url('../assets/night.png')");
//   }
// }

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
  console.log(`O tempo foi resetado!`);
  updateTime();
}

function updateTime(){
  textSeconds.innerText = seconds.toString().padStart(2, '0');
  textMinutes.innerText = minutes.toString().padStart(2, '0');
  textHours.innerText = hours.toString().padStart(2, '0');
  console.log(`Tempo atualizado!`);
}