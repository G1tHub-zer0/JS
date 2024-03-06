function run() {
  var person = {
    firstName: "Trung",
    lastName: "Vuong",
    age: 50,
    eyeColor: "blue",
  };
  let values = Object.values(person);
  for (values in values) {
    console.log(values);
  }
}
run();
