function run(n) {
  let count = 0;
  do {
    if (n % 2 !== 0) {
      break;
    }
    count++;
    n /= 2;
  } while (n == 1);

  console.log(count);
}
run(9);
