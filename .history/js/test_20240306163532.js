function uc_first(word) {
  return word
    .charAt(0)
    .toUpperCase()
    .concat(word.slice(1));
}

uc_first("khang");
