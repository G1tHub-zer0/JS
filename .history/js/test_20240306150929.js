function run() {
  var object1 = { foo: "bar", a: 5 };

  var object2 = { name: "foo", d: 10 };

  const object3 = { ...object2, ...object1 };
  console.log(object3);
}
run();
