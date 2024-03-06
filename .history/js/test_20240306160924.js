function run(data) {
  let result = data.map((item) => Math.abs(item));
  console.log(result);
}
run([-1, 2, 3, 4, 2, 6]);
