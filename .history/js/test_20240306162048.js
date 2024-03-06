function run(data) {
  data.shift();
  data.pop();
  console.log(data.push("X"));
}
run([1, 2, 3]);
