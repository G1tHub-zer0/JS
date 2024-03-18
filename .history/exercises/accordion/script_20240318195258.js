const accordionHeaders =
  document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener(
    "click",
    handleClickAccordion
  )
);
function handleClickAccordion(event) {
  event.target.nextElementSibling.classList.add(
    "is-active"
  );
  const icon =
    event.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-remove");
  icon.classList.toggle("fa-angle-up");
}
