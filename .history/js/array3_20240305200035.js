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
