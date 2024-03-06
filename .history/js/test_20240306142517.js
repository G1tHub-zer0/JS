function run(a, b, c, d) {
  var sorted_str = "";
  const array = [a, b, c, d];
  const newArray = array.sort((a, b) =>
    a > b ? -1 : 1
  );
  for (let i of newArray) {
    sorted_str += newArray[i];
  }
  console.log(newArray);
}

run(9, 2, 3, 1);
