// 1. Đảo ngược 1 chuỗi
function reverseString(str) {
  if (!str) return null;
  const newStr = str.split(" ");
  console.log(newStr.reverse().join(" "));
}
reverseString("day la thanh pho ho chi minh");

// 2. Đảo ngược 1 chuỗi gồm các kí tự
function reverseStr(str) {
  if (!str) return null;
  const newStr = reverse(str);
  console.log(newStr);
}
reverseStr("day la thanh pho ho chi minh");
