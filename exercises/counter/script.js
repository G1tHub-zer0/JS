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
  if (counterValue >= 20) return 20;
  counterValue++;
  counterNumber.textContent = counterValue;
});
buttonMinus.addEventListener("click", () => {
  if (counterValue <= 0) return 0;
  counterValue--;
  counterNumber.textContent = counterValue;
});
