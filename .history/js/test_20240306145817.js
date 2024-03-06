function run(str_input) {
  let arr = [];
  for (i = 0; i < str_input.length; i++) {
    arr.push(str_input[i]);
  }
  console.log(arr.reverse().toString().join(""));
}
run("khang");
