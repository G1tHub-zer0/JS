function run() {
  var person = {
    firstName: "Trung",
    lastName: "Vuong",
    age: 50,
    eyeColor: "blue",
  };
  let key = Object.keys(person);
  console.log(key.join("\n"));
}
run();
