const buttonSun = document.getElementById("buttonSun");
const buttonMoon = document.getElementById("buttonMoon");
const root = document.documentElement;

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