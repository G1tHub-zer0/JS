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
function capitalize(yourName = "") {
  if (yourName.length === 0) return null;
  let word = yourName.toLowerCase();
  function upperCase(capitalize) {
    word = yourName.replace(
      yourName.charAt(0),
      yourName.charAt(0).toUpperCase()
    );
    return word;
  }
  console.log(upperCase);
}
capitalize("KHANG");
