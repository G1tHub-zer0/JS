function run(data) {
  delete data.shift();
  delete data.pop();
  console.pop(data.push("X"));
}
run([1, 2, 3]);
