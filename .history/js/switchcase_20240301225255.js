// const key = prompt("", "");
// switch (key) {
//   case "apple":
//     alert("apple");
//     break;
//   case "lemon":
//   case "watermelon":
//     alert("lemons");
//     break;
//   case "orange":
//     alert("orange");
//     break;

//   default:
//     alert("Unknown key");
//     break;
// }

//Ternary operator
const isRich = false;
let message = "";
if (isRich) {
  message = "Buy Car";
} else {
  message = "Save money";
}
console.log(message);

let message2 = !isRich ? "Buy Car" : "Save money";
console.log(message2);

const age1 = 16;
let message3 =
  age1 >= 18
    ? "You are adult"
    : age1 >= 8
    ? "You are a teen"
    : "You are a child";
console.log(message3);
