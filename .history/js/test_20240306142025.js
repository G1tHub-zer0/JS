function run(a, b, c, d) {
  var sorted_str = "";
  const array = [a, b, c, d];
  newArray = array.sort((a, b) =>
    a > b ? -1 : 1
  );
  sorted_str += array.split("");
  console.log(sorted_str);
}

run(9, 2, 3, 1);
