// const button = document.querySelector(".button");
// const span = document.querySelector(
//   ".button span"
// );
// function handleClick() {
//   console.log("Click button");
// }
// button.addEventListener("click", handleClick);

// bubbling: Nổi bọt
// button.addEventListener("click", handleClick, {
//   capture: true,
// });
// event: e
// span.addEventListener("click", function (e) {
//   e.stopImmediatePropagation();
//   //   e.stopPropagation();
//   console.log("Click span");
// });
// span.addEventListener(
//   "click",
//   function (e) {
//     console.log("Click span 2");
//   },
//   { capture: true }
// );

// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Click body");
//   },
//   { capture: true }
// );
// Sự kiện click chạy từ trong ra ngoài

// target vs current target
// button.addEventListener(
//   "click",
//   function (event) {
//     console.log(event.target);
//     // event.target: nó sẽ chọn chính xác element mình click tới
//     console.log(event.currentTarget);
//     // event.currentTarget: nó sẽ chọn phần tử mà mình click
//   }
// );

// event.prevenDefault();
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log("CLick me");
  // selector.style.property = value;
  // event.target.style.property = value;
  // console.log(event.target);
  // console.log(event.target.style);
  // event.target.style.color = "red";
  // Lấy custom attribute data-abc
  // event.target.dataset.abc
  const name = event.target.dataset.name;
  console.log(name);
});
