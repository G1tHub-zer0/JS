//object literal
const objectLiteral = {};
//object constructor
const objectConstructor = new Object();
const students = {
  name: "Khang",
  age: 27,
  male: true,
  hi: function () {
    console.log("Hi");
  },
};

// 2 cach truy xuat gia tri cua object
// 2.1 Dot notation : object.key
console.log(students.name); // "Khang"
// 2.2 Brackets notation ["key"]
console.log(students["name"]);

// Thay doi gia tri cua object

console.log(students.age); //21
students.age = 21;
