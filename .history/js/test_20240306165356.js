function run(str) {
  for (let i = 0; i < str.length; i++) {
    switch (str(i)) {
      case "a":
        str = str.replace("a", 4);
      case "e":
        str = str.replace("e", 3);
      case "i":
        str = str.replace("i", 1);
      case "o":
        str = str.replace("o", 0);
      case "s":
        str = str.replace("s", 5);
      default:
    }
  }

  let result = newStr.trim();
  console.log(result);
}
run("javascript is cool  ");
