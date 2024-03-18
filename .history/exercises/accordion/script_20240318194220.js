const accordionHeaders =
  document.querySelectorAll(".accordion-header");
[...accordionHeaders].forEach((item) =>
  item.addEventListener(
    "click",
    handleClickAccordion
  )
);
function handleClickAccordion(event) {
  console.log(event.target);
}
