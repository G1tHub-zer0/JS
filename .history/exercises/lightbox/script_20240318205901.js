const images = document.querySelectorAll(
  ".content img "
);
[...images].forEach((item) =>
  item.addEventListener("click", handleZoomImage)
);
function handleZoomImage(event) {}
