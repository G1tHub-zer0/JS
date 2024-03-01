const key = prompt("", "");
switch (key) {
  case "apple":
    alert("apple");
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

//Ternary operator
const isRich = false;
let message = "";
if (!isRich) {
  message = "Buy Car";
} else {
  message = "Save money";
}
console.log(message);
