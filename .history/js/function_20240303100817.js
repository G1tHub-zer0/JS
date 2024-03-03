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
console.log(message); // "Hello" : var là global scope

// Lexical scope
let myName2 = "Khang";
function sayHello() {
  let message = "Hello";
  console.log(`${message} ${myName2}`);
}
sayHello();

// Closures
// function con co the truy xuat scope cua function cha
function sayHello2() {
  let message = "Hei";
  function sayHi() {
    console.log(message);
  }
  return sayHi();
}
sayHello2();

function sayHello3(message) {
  return function sayYourName(yourName) {
    console.log(`${message} ${yourName}`);
  };
}
let hello = sayHello3("Hello");
hello("Khang"); // "Hello Khang"

// Arrow function : Annonymous function
// let square = function (x) { // Normal function: Anonymous function
//   return x * x;
// };
// square(5); // 25

// Arrow function
// let square = (x) => {
//   return x * x;
// };
// square(5);
// Viet rur gon neu chi co 1 dong return
let square = (x) => x * x;
