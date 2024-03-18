const images = document.querySelectorAll(
  ".content img "
);
[...images].forEach((item) =>
  item.addEventListener("click", handleZoomImage)
);
function handleZoomImage(event) {
  const image = event.target.getAttribute("src");
  const template = `<div class="lightbox">
  <div class="lightbox-content">
  <i class="fa fa-angle-left lightbox-previous"></i>
      <img src="${image}" />
      <i class="fa fa-angle-right lightbox-next"></i>
  </div>
</div>`;
  document.body.insertAdjacentHTML(
    "beforeend",
    template
  );
}

let index = 0;

document.body.addEventListener(
  "click",
  (event) => {
    const lightImage = document.querySelector(
      ".lightbox-img "
    );
    let lightSrc = "";
    lightSrc = lightImage.getAttribute("src");
    if (event.target.matches(".lightbox")) {
      event.target.parentNode.removeChild(
        event.target
      );
    }
  }
);
