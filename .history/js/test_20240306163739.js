function uc_first(word) {
  return word
    .charAt(0)
    .toUpperCase()
    .concat(word.slice(1));
}
function run(str) {
  let arr = str.split(" ");
  for (let i of arr) {
    uc_first(i);
  }
  let result = arr.join(" ");
  console.log(arr);
}

console.log(run("toi la khang"));
