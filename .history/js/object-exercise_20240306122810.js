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
  const newObject = object.entries();
  console.log(newObject);
}
objectToArray(students);
