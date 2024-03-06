function run(n) {
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (Math.pow(i, 2) === n) {
      return true;
    } else {
      return false;
    }
  }
}
run(256);
