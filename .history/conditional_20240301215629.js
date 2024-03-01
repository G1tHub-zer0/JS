let isRich = false;
if (isRich) {
  console.log("Buy Car");
}
// nothing

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

// prompt, confirm, alert
// alert("Your web"); //Thông báo

// prompt("Vui long nhap vao ten cua ban", ""); //prompt("String", "default"); Thông báo nhập dữ liệu vào hộp thoại
// const tb = prompt("Nhap vao ten cua ban", "");
// console.log(tb);

// const tb = confirm("Day co phai la ban khong?"); Xác thực đúng hoặc sai
// console.log(tb);// True if OK and False if Cancel

// Nhập vào số tuổi và kiểm tra, nếu >= 18 thì được coi phim rạp còn không thì thôi

// let age = prompt("Nhap vao tuoi cua ban", "");
// let message = "Khong duoc coi";
// if (Number(age) >= 18) {
//   message = "Duoc coi phim rap";
// }
// alert(message);

let x = 5;
let y = 10;

if (a > b) {
  alert("a > b");
} else if (a == b) {
  alert("a == b");
} else {
  alert("a < b");
}
