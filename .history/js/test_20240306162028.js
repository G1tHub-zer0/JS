function run(data) {
  data.shift();
  data.pop();
  data.push("X");
  console.pop(data);
}
run([1, 2, 3]);
