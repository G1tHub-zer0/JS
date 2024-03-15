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
// event: e
span.addEventListener("click", function (e) {
  e.stopImmediatePropagation();
  //   e.stopPropagation();
  console.log("Click span");
});
span.addEventListener("click", function (e) {
  console.log("Click span 2");
});

document.body.addEventListener("click", () => {
  console.log("Click body");
});
// Sự kiện click chạy từ trong ra ngoài
