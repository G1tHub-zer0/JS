const button = document.querySelector(".button");
const template = `<div class="modal">
<div class="modal-content">
    <i class="fa fa-times modal-close"></i>
</div>
</div>`;
button.addEventListener("click", () => {
  document.body.insertAdjacentHTML(
    "beforeend",
    template
  );
});

document.body.addEventListener(
  "click",
  (event) => {
    if (event.target.matches(".modal-close")) {
      const modal =
        event.target.parentNode.parentNode;
    }
  }
);

// const modalClose = document.querySelector(
//   ".modal-close"
// );
// modalClose.addEventListener("click", handleClose);
// function handleClose(event) {
//   console.log(event.target);
// }
