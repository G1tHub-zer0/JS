// 1. selector.getAttribute("attribute")
// attribute -> Thuộc tính: href, id, class, src, style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach((item) =>
  console.log(item.getAttribute("class"))
);

// 2. selector.setAttribute("attribute", value) -> set gia tri cho attribute nao cho cua selector
