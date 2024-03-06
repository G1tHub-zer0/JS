function uc_first(word) {
  return word
    .charAt(0)
    .toUpperCase()
    .concat(word.slice(1));
}

console.log(uc_first("khang"));
