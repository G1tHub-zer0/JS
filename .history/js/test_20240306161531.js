function run(data) {
  let result = data.shift();
  result.pop();
  result.push();
  console.log(result);
}
run([1, 2, 3]);
