// 1. Viet 1 function kiem tra value co phai object khong
function isObject(value) {
  if (
    typeof value === "object" &&
    !Array.isArray(value) &&
    value !== null
  ) {
    return true;
  }
  return false;
}
console.log(isObject(asda));
