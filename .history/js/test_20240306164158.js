function uc_first(word) {
  return word
    .charAt(0)
    .toUpperCase()
    .concat(word.slice(1));
}
arr = ["toi", "la", "khang"];
for (let i of arr) {
  uc_first();
  console.log(i);
}
