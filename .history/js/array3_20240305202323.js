// By value vs By references
// By value -> Giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); //true
// By references -> Nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //false

//JSON: JavaScript Object Notation
/*
{
    "key": "value",
    "key": "value,
    "key": "value
}
*/
// JSON.stringify(value) -> convert gia tri sang dang JSON string
// [1,2,3].toString() -> "1,2,3"
// JSON.stringify([1,2,3]) -> "[1,2,3]"
// JSON.parse("[1,2,3]") -> [1,2,3]
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));
const arrlStr = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arrlStr === arr2Str); //true

// 2 cach sao chep mang
// slice()
const student = ["a", "b", "c", "d", "e"];
const sliceStudent = student.slice();
console.log(sliceStudent);
// spread operator
const spreadStudent = [...student];
console.log(spreadStudent);

// 2 cach gop mang
// concat()
// array1.concat(array2, array3, ...);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);
//spread operator
const mergeArray2 = [
  ...array1,
  ...array2,
  ...array3,
];
console.log(mergeArray2);

//destructuring array
const toys = [
  "ball",
  "sword",
  "arrow",
  "magic",
  "water",
  "fire",
];
const [a, b, c] = toys; //a , b, c: tên biến và sẽ được gán theo vị trí index
console.log(a, b, c); // ball sword arrow

// rest parameter
// const [ball, sword, arrow, ...rest] = toys;
// console.log(rest); // ['magic', 'water', 'fire']
const [ball, ...rest] = toys;
console.log(rest); //['sword', 'arrow', 'magic', 'water', 'fire']
