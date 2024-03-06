function run(n) {
  for (let i = 0; i <= n; i++) {
    if (i === Math.sqrt(n)) {
      return true;
    } else {
      return false;
    }
  }
}
run(256);
