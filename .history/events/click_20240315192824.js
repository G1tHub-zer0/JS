const button = document.querySelector(".button");
const span = document.querySelector(
  ".button span"
);
function handleClick() {
  console.log("Click button");
}
// button.addEventListener("click", handleClick);

// bubbling: Nổi bọt
button.addEventListener("click", handleClick);
span.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("Click span");
});
document.body.addEventListener("click", () => {
  console.log("Click body");
});
// Sự kiện click chạy từ trong ra ngoài
