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
  document.body.setAttribute(
    "style",
    "background-color: red"
  );
}
button.addEventListener(
  "click",
  handleChangeColor
);
