const tabItems =
  document.querySelectorAll(".tab-item");
tabItems.forEach((item) =>
  item.addEventListener("click", handleTabClick)
);
function handleTabClick(event) {
  tabItems.forEach((item) =>
    item.classList.remove("active")
  );
  event.target.classList.add("active");
  const tabNumber = event.target.dataset.tab;
  console.log(tabNumber);
}
