function run() {
  var person = {
    firstName: "Trung",
    lastName: "Vuong",
    age: 50,
    eyeColor: "blue",
  };
  let value = Object.values(person);
  for ([key, value] in value) {
    console.log(String(value));
  }
}
run();
