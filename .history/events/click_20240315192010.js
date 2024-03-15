const button = document.querySelector(".button");
const span = button.querySelector(".button span");
function handleClick() {
  console.log("Click button");
}
button.addEventListener("click", handleClick);

// bubbling: Nổi bọt
button.addEventListener("click", handleClick);
span.addEventListener("click", () =>
  console.log("Click span")
);
