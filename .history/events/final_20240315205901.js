const button = document.querySelector(".change");
const colors = [
  "red",
  "green",
  "yellow",
  "blue",
  "black",
  "white",
  "purple",
  "gray",
];

function handleChangeColor() {
  document.body.style.backgroundColor = "red";
}
button.addEventListener(
  "click",
  handleChangeColor
);
