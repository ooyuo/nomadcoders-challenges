// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const range = document.querySelector(".js-range"),
  number = document.querySelector(".js-number"),
  button = document.querySelector(".js-playBtn"),
  info = document.querySelector(".js-showInfo"),
  result = document.querySelector(".js-result"),
  betweenNum = document.querySelector(".js-betweenNum");

function handlePlayBtn() {
  const guessNum = Number(number.value);
  const rangeNum = range.value;
  const randomNum = Math.floor(Math.random() * rangeNum + 1);

  info.textContent = `You chose: ${guessNum}, the machine chose: ${randomNum}`;

  if (typeof guessNum === "number") {
    guessNum === randomNum
      ? (result.textContent = `You won!`)
      : (result.textContent = `You lost!`);
  }
}

function handleRange() {
  let rangeValue = range.value;
  betweenNum.textContent = `Generate a number between 0 and ${rangeValue}`;
}

function init() {
  betweenNum.textContent = `Generate a number between 0 and 130`;
  button.addEventListener("click", handlePlayBtn);
  range.addEventListener("input", handleRange);
}
init();
