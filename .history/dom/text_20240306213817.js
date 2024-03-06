// 1. textContent
const spinner =
  document.getElementById("spinner");
// Thay doi text content
// spinner.textContent = "Hello new content";
// console.log(spinner.textContent);

// 2. innerText -> giống textContent, chi khac la innerText loai bo khoang trang du thua và khong lay duoc display: none
console.log(spinner.textContent);
console.log(spinner.innerText);

// 3. innerHTML -> lay ra noi dung cua selector bao gom ca HTML
console.log(spinner.innerHTML);
