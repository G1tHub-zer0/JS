/* 
1. Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]]. 
Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. Gợi
ý giá trị falsy là 0 null undefined false "" NaN 
*/
const arr1 = [
  1,
  1000,
  false,
  null,
  "evondev",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
];
const filterFalsy = arr1.filter((item) =>
  Boolean(item)
);
console.log(filterFalsy);

/* 
2. Cho 1 màng phức tạp [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90111. 
Và kết quả mong muốn là [1,2,3, false, null, 1,5,6, "javascript",888,666,90]
*/

const arr2 = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90111]],
];
const resultArray = arr2.flat(2);
console.log(resultArray);

// 3. Đảo ngược số nguyên
function reversenumber(number) {
  const stringNumber = String(number);
  const newNumber = stringNumber
    .split("")
    .reverse()
    .join("");
  console.log(Number(newNumber));
  console.log(stringNumber.split());
}
reversenumber(2415);
