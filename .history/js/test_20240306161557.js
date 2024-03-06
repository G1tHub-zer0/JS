function run(data) {
  let result = data.shift();
  result = result.pop();
  result = result.push("X");
  console.log(result);
}
run([1, 2, 3]);
