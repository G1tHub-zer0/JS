const tabItems =
  document.querySelectorAll(".tab-item");
tabItems.forEach((item) =>
  item.addEventListener("click", handleTabClick)
);
function handleTabClick(event) {
  event.target.classList.add("active");
}
