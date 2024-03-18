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

const modalClose = document.querySelector(
  ".modal-close"
);
modalClose.addEventListener("click", () => {
  console.log("1");
});