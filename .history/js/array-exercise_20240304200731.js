// 1. Đảo ngược 1 chuỗi
function reverseString(str) {
  if (!str) return null;
  const newStr = str.split(" ");
  console.log(newStr.reverse());
}
reverseString("toi la khang");
