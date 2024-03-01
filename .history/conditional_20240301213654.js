let isRich = false;
if (isRich) {
  console.log("Buy Car");
}
//nothing

isRich = true;
if (isRich) {
  console.log("Buy Car");
} else {
  console.log("Save money");
}
// "Buy Car"

if (!isRich) {
  console.log("Buy Car");
} else {
  console.log("Save money");
}
// "Save money"

let a = 4;
let b = 5;

if (a > b) {
  console.log("a > b");
} else if (a == b) {
  console.log("a = b");
} else {
  console.log("a < b");
}
// "a < b"

//prompt, confirm, alert
//alert("Your web"); //Thông báo
prompt("Vui long nhap vao ten cua ban");
