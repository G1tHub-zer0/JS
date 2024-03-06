function run(a, b, c, d) {
  var sorted_str = "";
  const array = Math.sort((a, b) =>
    a > b ? -1 : 1
  );
  sorted_str += array.split("");
  console.log(sorted_str);
}
