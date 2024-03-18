const button = document.querySelector(".button");
button.addEventListener(
  "click",
  handleClickButton
);
function handleClickButton(event) {
  console.log(event.target);
}
