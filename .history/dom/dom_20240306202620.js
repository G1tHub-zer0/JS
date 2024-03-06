// 2. Selecting node
//2.1 document.querySelector("selector");
// selectors: .header, p, body, #heading,...
const singleNode = document.querySelector("h1");
const singleNode2 =
  document.querySelector(".container");
const singleNode3 =
  document.querySelector("#spinner");
const singleNode4 = document.querySelector(
  ".container .heading"
); // -> null vi khong ton tai .heading
console.log(singleNode4);
console.log(
  document.querySelector(".container p")
);
