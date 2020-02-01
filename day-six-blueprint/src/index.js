// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const select = document.querySelector("select");
const CONTRY_LS = "contry";

function handleSelectOne(e) {
  const selectedValue = e.target.value;
  localStorage.setItem(CONTRY_LS, selectedValue);
}

function loadLocalStorage() {
  const getContryValue = localStorage.getItem(CONTRY_LS);
  select.value = getContryValue;
}

function init() {
  loadLocalStorage();
  select.addEventListener("change", handleSelectOne);
}

init();
