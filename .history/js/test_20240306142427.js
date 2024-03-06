function run(a, b, c, d) {
  var sorted_str = "";
  const array = [a, b, c, d];
  const newArray = array.sort((a, b) =>
    a > b ? -1 : 1
  );
  for (let i of newArray) {
    sorted_str += newArray[i].toString();
  }
  console.log(sorted_str);
}

run(9, 2, 3, 1);
