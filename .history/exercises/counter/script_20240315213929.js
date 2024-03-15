const buttonMinus = document.querySelector(
  ".counter-descrease"
);
const buttonPlus = document.querySelector(
  ".counter-increase"
);
const counterNumber = document.querySelector(
  ".counter-number"
);
let counterValue = Number(
  counterNumber.textContent
);
buttonPlus.addEventListener("click", () => {
  counterValue++;
  counterNumber.textContent = counterValue;
});
buttonMinus.addEventListener("click", () => {
  counterValue--;
  counterNumber.textContent = counterValue;
});
