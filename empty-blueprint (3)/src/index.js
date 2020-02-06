// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";

// <⚠️ /DONT DELETE THIS ⚠️>

const output = document.querySelector(".js-output"),
  reset = document.querySelector(".js-reset"),
  equals = document.querySelector(".js-equals"),
  number = Array.from(document.querySelectorAll(".js-number")),
  operator = Array.from(document.querySelectorAll(".js-operator"));

let firstFlag,
  secondFlag,
  firstNumber = "",
  secondNumber = "",
  currentOperator;

const handleNumberClick = e => {
  const clickedNumber = e.target.innerText;
  console.log(clickedNumber);
  if (!firstFlag) {
    firstNumber += clickedNumber;
    output.textContent = firstNumber;
    console.log(firstNumber, secondNumber);
  } else {
    secondNumber += clickedNumber;
    output.textContent = secondNumber;
    secondFlag = true;
    console.log(firstNumber, secondNumber);
  }
};

const handleOperatorClick = e => {
  currentOperator = e.target.innerText;

  if (!firstFlag) firstFlag = true;
  if (firstFlag && secondFlag) {
    calculate(currentOperator);
  }
  console.log(currentOperator);
};

const calculate = () => {
  const resultValue = doOperation();
  output.textContent = resultValue;
  firstNumber = resultValue;

  secondFlag = false;
  secondNumber = "";
  console.log(firstFlag, secondFlag);
};

const doOperation = () => {
  const inputFirst = Number(firstNumber);
  const inputSecond = Number(secondNumber);

  switch (currentOperator) {
    case "+":
      return inputFirst + inputSecond;
    case "-":
      return inputFirst - inputSecond;
    case "*":
      return inputFirst * inputSecond;
    case "/":
      return inputFirst / inputSecond;
    default:
      return;
  }
};

const handleEqualsClick = () => {
  if (firstFlag && secondFlag) calculate(firstNumber, secondNumber);
};

const handleResetClick = () => {
  output.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  firstFlag = false;
  secondFlag = false;
};

number.forEach(function(number) {
  number.addEventListener("click", handleNumberClick);
});

operator.forEach(function(operator) {
  operator.addEventListener("click", handleOperatorClick);
});

reset.addEventListener("click", handleResetClick);
equals.addEventListener("click", handleEqualsClick);
