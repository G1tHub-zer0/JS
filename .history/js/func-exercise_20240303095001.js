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
  let bword = yourName.slice(1);
  return `${fword}${bword}`;
}
console.log(bt2("KHANG"));
