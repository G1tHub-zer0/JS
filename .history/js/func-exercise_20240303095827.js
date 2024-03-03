// 1. Viết function so sánh 2 số a , b tìm ra số lớn hơn
function compare(a = 0, b = 0) {
  if (
    typeof a !== "number" ||
    typeof b !== "number"
  ) {
    console.error("Please enter a valid number");
    return;
  }
  return Math.max(a, b);
}
// console.log(compare("21321321"));

// 2. In hoa chu cai dau tien
function bt2(yourName = "") {
  if (yourName.length === 0) return -1;
  let fword = yourName
    .toLowerCase()
    .charAt(0)
    .toUpperCase();
  let bword = yourName.slice(1).toLowerCase();
  return `${fword}${bword}`;
}
console.log(bt2("KHANG"));

// 3. Viết hàm có sử dụng callback (function là parameter của function khác) in ra két quả của hàm compare viết ở trên
function usecallback(a = 0, b = 0, callback) {
  let max = compare(a, b);
  callback(max);
}
function printMax(number) {
  console.log("Max number: " + number);
}

console.log(usecallback(5, 10, printMax));
