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
console.log(isObject());

const students = {
  name: "Khang",
  age: 27,
  male: true,
  "last-name": "tuan",
  hi: function () {
    console.log(
      `my name is ${this.name} and i am ${this.age} years old`
    );
  },
  fullName: {
    name: "Nguyen Quoc Khang",
  },
};

// 2. {a: 1, b: 2} -> [["a", 1],["b",2]}
function objectToArray(object) {
  if (!isObject(object)) return;
  //   const value = Object.entries(object);
  // const value = Object.keys(object).map((key) => [key, object[key]]);
  let value = [];
  for (let key in object) {
    if (object.hasOwnProperty(key))
      value.push([key, object[key]]);
  }
  console.log(value);
}
objectToArray(students);

// 3. ({a: 1, b: 2}, 'b') -> {a:1} Xoa key b
function without(object, ...key) {
  if (!isObject(object)) return;
  key.forEach((item) => {
    delete object[item];
  });
  return object;
}
console.log(without(students, "name", "age"));
