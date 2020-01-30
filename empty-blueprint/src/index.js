// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

function handleInnerWidth() {
  let width = window.innerWidth;

  if (width > 0 && width < 500) {
    body.style.backgroundColor = "blue";
  } else if (width >= 500 && width < 1000) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", handleInnerWidth);
