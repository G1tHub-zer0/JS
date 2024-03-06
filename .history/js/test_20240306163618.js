function uc_first(word) {
  let newWord = word
    .charAt(0)
    .toUpperCase()
    .concat(word.slice(1));
  return newWord;
}

console.log(uc_first("khang"));
