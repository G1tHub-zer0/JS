// function declaration
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6));
console.log(sum(-1, 2));
// Không có return thì kết quả về là undefined
// console.log(sum(5)); //NaN vi 5 + undefined = NaN
// Ta có thể truyền giá trị mặc định vào để không gặp vấn đề này khi không điền tham số
// function sum(parameter = defaultValue) {}
// function sum(a = 0, b = 0) {}

function add(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
}
const sum1 = add;
// Gan func add cho sum1 nhung chua duoc goi
sum1(5, 7);
// Tính trung bình của a và b

function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(5, 7, sum1);
console.log(result);

// Anonymous function (function expression): function vo danh
// Can phai khai bao truoc khi goi (khong bi hoisting)
const logName = function () {
  console.log("My name");
};
logName();

// IIFE: immediately invoked function execution : function chay ngay lap tuc
(function () {
  console.log("This is IIFE function");
})();

// Global scope and function scope
let myName = "Khang"; // global scope
function logMyName() {
  let myName1 = "Khag"; // function scope
}
console.log(myName); // "Khang"
// console.log(myName1); // error not defined

// block scope
if (2 > 1) {
  // const message = 'Hello';
  let message = "Hello"; // block scope : Tương tư function scope
}
// console.log(message); //error
// Tuy nhien
if (2 > 1) {
  var message = "Hello"; //
}
console.log(message);
