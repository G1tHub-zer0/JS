// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi
// 2. Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào.
//Vi dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian trung bình
/* 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại
ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A 
vừa online 3 phút trước, 3 ngày trước, 2 tháng trước, 30 giây trước, 1 nămtrước */

// 1
// function calAge(year) {
//   if (typeof year !== "number") return null;
//   let now = new Date();
//   return now.getFullYear() - year;
// }
// let myYear = Number(prompt());
// console.log(calAge(myYear));

// 2
// function demNguoc(minute = 30) {
//   const dem = setInterval(() => {
//     console.log(`${minute}`);
//     minute = minute - 1;
//     if (minute < 0) {
//       clearInterval(dem);
//       console.log("Ban da het thoi gian");
//     }
//   }, 1000);
// }
// demNguoc();

// 3
function timeSince(date) {
  const now = new Date();
  const seconds = Math.floor(
    (now.getTime() - new Date(date).getTime()) /
      1000
  );
  if (seconds < 0) {
    alert("Your time is invalid");
  }
  let timer = seconds / 31536000;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} năm trước`);
    return;
  }
  timer = seconds / 2678400;
  if (timer > 1) {
    console.log(
      `${Math.floor(timer)} tháng trước`
    );
    return;
  }
  timer = seconds / 604800;
  if (timer > 1) {
    console.log(
      `${Math.floor(timer)} tuần trước`
    );
    return;
  }
  timer = seconds / 86400;
  if (timer > 1) {
    console.log(
      `${Math.floor(timer)} ngày trước`
    );
    return;
  }
  timer = seconds / 3600;
  if (timer > 1) {
    console.log(`${Math.floor(timer)} giờ trước`);
    return;
  }
  timer = seconds / 60;
  if (timer > 1) {
    console.log(
      `${Math.floor(timer)} phút trước`
    );
    return;
  }
  timer = seconds;
  if (timer > 1) {
    console.log(
      `${Math.floor(timer)} giây trước`
    );
    return;
  }
}
// 1 năm = 365 * 24 * 60 * 60 = 31536000
// 1 tháng = 31 * 24 * 60 * 60 = 2678400
// 1 tuần = 7 * 24 * 60 * 60 = 604800
// 1 ngày = 1 * 24 * 60 * 60 = 86400
// 1 giờ = 1 * 60 * 60 = 3600
// 1 phút = 1 * 60 = 60
timeSince("Thu Jan 01 2024 07:00:00 GMT+0700");
