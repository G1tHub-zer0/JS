// // 1. selector.classList.add("...");
// const container =
//   document.querySelector(".container");
// container.classList.add("is-active");

// // 2. selector.classList.remove("...");
// container.classList.remove("container");

// // 3. selector.classList.contains("..."); -> co chua class ... do khong
// console.log(
//   container.classList.contains("container") // false vi da remove truoc do
// );
// console.log(
//   container.classList.contains("is-active") // true vi da them vao
// );
// console.log(
//   !container.classList.contains("is-active") // false
// );

// // 4. selector.classList.toggle("..."); -> Neu co class do roi thi se remove class do di
// container.classList.toggle("is-active");

// // 5. selector.classname -> tra ra chuoi cac class cua selector
// const title = document.querySelector(".title");
// console.log(title.className);
// title.className = "title";

const menu = document.querySelector(".menu");
menu.classList.add("is-active");
