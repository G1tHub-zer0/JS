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
  const color =
    colors[Math.random() * colors.length];
  document.body.style.backgroundColor =
    colors[Math.random() * colors.length];
}
button.addEventListener(
  "click",
  handleChangeColor
);
