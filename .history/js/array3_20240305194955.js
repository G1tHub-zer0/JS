// By value vs By references
// By value -> Giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); //true
// By references
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //true
