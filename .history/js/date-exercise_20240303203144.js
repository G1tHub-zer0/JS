// 1. Viết chương trình nhập vào năm sinh và in ra số tuổi
// 2. Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào.
//Vi dụ thời gian làm bài là 30 phút nếu chạy về 0 thì thông báo đã hết thời gian trung bình
// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại
//ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online 3 phút trước, 3 ngày trước, 2 tháng trước, 30 giây trước, 1 nămtrước

// 1
// function calAge(year) {
//   if (typeof year !== "number") return null;
//   let now = new Date();
//   return now.getFullYear() - year;
// }
// let myYear = Number(prompt());
// console.log(calAge(myYear));

// 2
function demNguoc(minute = 30) {
  let second = minute * 60;
  const dem = setInterval(() => {
    console.log(`${minute}`);
    minute = minute - 1;
    if (minute < 0) {
      clearInterval(dem);
      console.log("Ban da het thoi gian");
    }
  }, 1000);
}
let giay = Number(prompt());
demNguoc(giay);

// 3
