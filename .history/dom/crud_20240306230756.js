// Them xoa sua node trong js
// 1. Tao ra Element trong JavaScript: document.createElement("element")
// Element: body, div, ul, li, p, span (tag)
const div = document.createElement("div");

// 2. selector.appendChild
// document.body : the body = document.querySelector("body")
const body = document.body;
// body.appendChild(div);
// div.classList.add("container");
// // div.className = "container";
// div.textContent =
//   "Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et";
// div.innerHTML = `<div class="content"><h3></h3></div>`;
// div.setAttribute("data-name", "khang");

body.appendChild(div);
div.classList.add("card");
const img = document.createElement("img");
div.appendChild(img);
img.className = "card-image";
img.setAttribute(
  "src",
  ""
  //   "https://source.unsplash.com/random"
);
img.setAttribute("alt", "");

// 3. document.createTextNode
const text = document.createTextNode(
  "Hello, world!"
);
body.appendChild(text);

const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

// 4. cloneNode
const h1Clone = h1.cloneNode();
body.appendChild(h1Clone);
