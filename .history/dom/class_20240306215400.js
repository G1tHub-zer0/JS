// 1. selector.classList.add("...");
const container =
  document.querySelector(".container");
container.classList.add("is-active");

// 2. selector.classList.remove("...");
container.classList.remove("container");

// 3. selector.classList.contains("..."); -> co chua class ... do khong
console.log(
  container.classList.contains("container") // false vi da remove truoc do
);
console.log(
  container.classList.contains("is-active") // true vi da them vao
);
console.log(
  !container.classList.contains("is-active") // false
);

// 4. selector.classList.toggle("..."); -> Neu co class do roi thi se remove class do di
container.classList.toggle("is-active");
