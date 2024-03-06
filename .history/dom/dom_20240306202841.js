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
); // -> null vi khong ton tai .heading trong .container
console.log(singleNode4);

// 2.2 document.querySelectorAll("selector") -> tra ve mot Nodelist chua danh sach cac node, neu khong co thi tra ve empty
// nó có thể loop
