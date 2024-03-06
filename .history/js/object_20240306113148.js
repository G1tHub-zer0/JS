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
// 2.2 Brackets notation ["key"]: Dung cho cac key co ten dac biet, khi do phai dung " ". VD: "last-name"...
console.log(students["name"]);

// Thay doi gia tri cua object
console.log(students.age); // 27
students.age = 21;
console.log(students.age); //21
// Them object
students.isDeveloper = true;
console.log(students);
students.hello = function () {
  console.log("Hello");
};

// Xoa gia tri trong object
delete students.isDeveloper;
console.log(students);

// Duyet qua cac key trong object
for (let key in students) {
  const value = students[key];
  console.log(`${key}: ${value}`);
}

// Object.keys(object): tra ve mot mang gom cac key cua object
const keys = Object.keys(students);
console.log(keys);

// Object.values(object): tra ve mot mang gom cac value cua object
const values = Object.values(students);
console.log(values);

// Object.entries(object): tra ve mot mang nested gom co cap key va value
const entries = Object.entries(students);
console.log(entries);

// Object.assign() : Copy object, gop nhieu object lai voi nhau
const a = {
  firstName: "Quoc",
};
const b = {
  lastName: "Khang",
};
const c = Object.assign(a, b);
console.log(c);
// hoac
const d = { ...a, ...b };
console.log(d);

//Object.freeze(object) -> Ngan chan chinh sua key va value cu object
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "Lenovo";
console.log(newCar);

// Object.seal(object) -> Cho phep chinh sua nhung khong cho them key value moi
const user = {
  name: "Khang",
  fullName: {
    firstName: "Nguyen Quoc",
    lastName: "Khang",
  },
};
// const newUser = Object.seal(user);
// user.lastName = "Zer0";
// console.log(user);
// user.name = "Quoc Khang";
// console.log(user);

// clone nested object -> su dung JSON
const newUser3 = JSON.parse(JSON.stringify(user));
console.log(newUser3);
newUser3.fullName.lastName = "Huy";
console.log(user);
console.log(newUser3);

// this nó sẽ đề cập tới object gần nhất
const student2 = {
    name: "evondev",
    age: 27,
    male: true,
    "last-name": "tuan",
    hi: function () {
    console.log('my name is ${this.name} and i am ${this.age} years old`);
    },
    };
    student2.hi();