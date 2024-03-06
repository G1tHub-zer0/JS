function run(data) {
  data.shift();
  data.pop();
  console.pop(data.push("X"));
}
run([1, 2, 3]);
