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

// 2.2 document.querySelectorAll("selector") -> tra ve mot Nodelist chua danh sach cac node, neu khong co thi tra ve empty nodelist
// nó có thể loop và sử dụng forEach
// nhung khong the su dung duoc cac phuong thuc cua array
const multiNodes =
  //   document.querySelector(".item"); // Chi tra ve cai dau tien
  document.querySelectorAll(".item");
console.log(multiNodes);

// 2.3 document.getElementByClassName("classname") -> tra ve mot HTMl collection chua danh sach cac node, neu khong co thi tra ve empty
const classNode =
  document.getElementsByClassName("item");
console.log(classNode);

// 2.4 document.getElementByTagName("tagname")
const tagNode =
  document.getElementsByTagName("h1");
console.log(tagNode);
