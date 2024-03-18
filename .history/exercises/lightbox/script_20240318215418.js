const images = document.querySelectorAll(".content img ");
[...images].forEach((item) =>
  item.addEventListener("click", handleZoomImage)
);
function handleZoomImage(event) {
  const image = event.target.getAttribute("src");
  const template = `<div class="lightbox">
  <div class="lightbox-content">
  <i class="fa fa-angle-left lightbox-prev"></i>
      <img src="${image}" class = "lightbox-image"/>
      <i class="fa fa-angle-right lightbox-next"></i>
  </div>
</div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}

let index = 0;

document.body.addEventListener("click", (event) => {
  const lightImage = document.querySelector(
    ".lightbox-image "
  );
  let lightSrc = "";
  if (event.target.matches(".lightbox")) {
    event.target.parentNode.removeChild(event.target);
  } else if (event.target.matches(".lightbox-next")) {
    lightSrc = lightImage.getAttribute("src");
    index = [...images].findIndex(
      (item) => item.getAttribute("src") === lightSrc
    );
    index += 1;
    if (index > images.length - 1) {
      index = 0;
    }
    const newSrc = [...images][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);
  } else if (event.target.matches(".lightbox-prev")) {
    //
  }
});
