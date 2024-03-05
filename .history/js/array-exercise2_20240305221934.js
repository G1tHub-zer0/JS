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
  const newNumber =
    parseInt(
      number
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(number);
  console.log(newNumber);
}
reversenumber(-2415);

/* 4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, 
và cho chạy từ 1 cho tới số nguyên đó rối kiểm tra nếu số chia hết cho 2 thì in ra chữ "Fizz", 
nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2 và 3 thi in ra "FizzBuzz" */

function fizzBuzz(number) {
  if (isNaN(number)) return null;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 && i % 3 === 0)
      console.log("FizzBuzz");
    else if (i % 2 === 0) console.log("Fizz");
    else if (i % 3 === 0) console.log("Buzz");
  }
}
fizzBuzz(15);

// 5. Cho 1 chuoi bat ki, dem so luong nguyen am co trong chuoi
function checkString(str) {
  let count = 0;
  const characters = "ueoai";
  for (let i of str) {
    if (characters.includes(i)) count++;
  }
  console.log(count);
}

checkString("ueoai");

/* 
6. Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. 
Viết một function trả về một mảng với các giá trị unique. Kết quả ở trên sẽ là [1,2,3,5,7,6];
*/
const number = [
  1, 2, 3, 1, 1, 1, 2, 2, 2, 5, 5, 5, 7, 7, 6, 9,
  12, 11, 12, 10, 11,
];
function uniqueFunc(arr) {
  const newNumber = [];
  for (const i of number) {
    if (!newNumber.includes(i)) newNumber.push(i);
  }
  result = newNumber.sort((a, b) =>
    a > b ? 1 : -1
  );
  console.log(result);
}
uniqueFunc(number);
