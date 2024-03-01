const key = prompt("", "");
switch (key) {
  case "apple":
    alert("Apple");
    break;
  case "lemon":
  case "watermelon":
    alert("lemons");
    break;
  case "orange":
    alert("orange");
    break;

  default:
    alert("Unknown key");
    break;
}
