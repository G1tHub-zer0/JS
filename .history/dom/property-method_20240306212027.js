// 1. selector.getAttribute("attribute")
// attribute -> Thuộc tính: href, id, class, src, style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach((item) =>
  console.log(item.getAttribute("class"))
);

// 2. selector.setAttribute("attribute", value) -> set gia tri cho attribute nao cho cua selector
link.setAttribute("target", "_blank");
const listLink =
  document.querySelectorAll("a.link");
listLink.forEach((item) =>
  item.setAttribute("target", "_blank")
);

// 3. selector.removeAttribute("attribute")
const p = document.getElementById("spinner");
p.removeAttribute("color");
