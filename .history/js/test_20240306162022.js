function run(data) {
  data.shift();
  data.pop();
  data.push("X");
  console.log(data);
}
run([1, 2, 3]);
