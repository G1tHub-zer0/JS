const accordionHeaders =
  document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener(
    "click",
    handleClickAccordion
  )
);
function handleClickAccordion(event) {
  const content = event.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle("is-active");
  const icon =
    event.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
