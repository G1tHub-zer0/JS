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
  const newObject = { ...object };
  key.forEach((item) => {
    delete newObject[item];
  });
  return newObject;
}
console.log(without(students, "name", "age"));

//4. so sanh 2 object
const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  a: 1,
  b: 2,
};
function isEqualObject(obj1, obj2) {
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);
  if (objkey1.length !== objkey2.length)
    return false;
  const result = objkey1.every(
    (key) => obj1[key] === obj2[key]
  );
}
