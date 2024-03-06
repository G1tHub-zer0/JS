function run(data) {
  if (!data.include(2)) {
    console.log("No result");
  }
  let a = data.indexOf(2);
  let b = data.lastIndexOf(2);
  console.log(a + " " + b);
}
run([-1, 2, 3, 4, 2, 6]);
