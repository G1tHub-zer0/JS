function run() {
  var person = {
    firstName: "Trung",
    lastName: "Vuong",
    age: 50,
    eyeColor: "blue",
  };
  let values = Object.values(person);
  //   console.log(values);
  for (let i of values) console.log(i);
}
run();
