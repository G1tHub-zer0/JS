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
  document.body.style.backgroundColor =
    color[Math.random() * colors.length];
}
button.addEventListener(
  "click",
  handleChangeColor
);
