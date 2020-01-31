import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const dDayContainer = document.querySelector("div"),
  title = dDayContainer.querySelector("h1"),
  dDay = dDayContainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const toDay = new Date();
  const thatDay = xmasDay - toDay;

  let day = Math.floor(thatDay / (1000 * 60 * 60 * 24));
  let hours = updateUnits(Math.floor((thatDay / (1000 * 60 * 60)) % 24));
  let minutes = updateUnits(Math.floor((thatDay / (1000 * 60)) % 60));
  let seconds = updateUnits(Math.floor((thatDay / 1000) % 60));

  title.innerText = `Time Until Christmas`;
  dDay.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateUnits(date) {
  return date < 10 ? `0${date}` : date;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
