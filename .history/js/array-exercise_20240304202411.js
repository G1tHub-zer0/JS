// 1. Đảo ngược 1 chuỗi
// function reverseString(str) {
//   if (!str) return null;
//   const newStr = str.split(" ");
//   console.log(newStr.reverse().join(" "));
// }
// reverseString("day la thanh pho ho chi minh");

// 2. Đảo ngược 1 chuỗi gồm các kí tự
// function reverseStr(str) {
//   if (!str) return null;
//   console.log(str.split("").reverse().join(""));
// }
// reverseStr("i love");

// 3. In hoa chu cai dau tien trong chu
function upperString(str) {
  if (!str) return null;
  newStr = str
    .split(" ")
    .map((value) =>
      value
        .replace(
          value.charAt(0),
          value.charAt(0).toUpperCase()
        )
        .join(" ")
    );
  console.log(newStr);
}
upperString("ten cua toi la Khang");
