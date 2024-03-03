const now = new Date();
console.log(now);
// Sun Mar 03 2024 10:18:54 GMT+0700 (GMT+07:00)
// Timezone: GMT+0700 (GMT+07:00)

//Timestamp and Epoch time
//Unix time
// Timestamp tinh ra ket qua la miliseconds
console.log(now.getTime()); //print timestamp: 1709436278304
console.log(new Date(0)); //Thu Jan 01 1970 07:00:00 GMT+0700 (GMT+07:00)
console.log(new Date(1709436278304)); //Sun Mar 03 2024 10:24:38 GMT+0700 (GMT+07:00)

//4 cach su dung new Date
// new Date() -> in ra ngay gio hien tai
// new Date(timestamp) -> in ra ngay gio theo timestamp
// new Date(year, month - 1, day, hours, minutes, seconds, miliseconds)
// new Date(date string);
console.log(new Date(1709436278304));
console.log(
  new Date(
    "Sun Mar 03 2024 10:24:38 GMT+0700 (GMT+07:00)"
  )
);
console.log(new Date(2003, 4, 6, 5, 34, 10));

// cac ham get trong Date
const birthday = new Date(
  2003,
  4,
  6,
  5,
  6,
  24,
  56
);
console.log(birthday.getFullYear()); // 2003
// getMonth : 0 -> 11
console.log(birthday.getMonth() + 1); // 5
// in ra ngay cua thang 1 -> 31
console.log(birthday.getDate()); // 6
// in ra thu ngay 0 -> 6: 0: Chu nhat -> 6: Thu bay
console.log(birthday.getDay() + 1); // 3
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
console.log(birthday.getMilliseconds());

console.log(`My birthday: ${birthday}`);
birthday.setFullYear(2002);
birthday.setMonth(10);
birthday.setDate(30);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(
  `My birthday after update: ${birthday}`
);
// theo thoi gian quoc te UTC
console.log(birthday.getUTCFullYear());
console.log(birthday.getUTCMonth() + 1);
console.log(birthday.getUTCDate());
console.log(birthday.getUTCDay() + 1);
console.log(birthday.getUTCHours());
console.log(birthday.getUTCMinutes());
console.log(birthday.getUTCSeconds());
console.log(birthday.getUTCMilliseconds());

console.log(now.toDateString()); // Sun Mar 03 2024
console.log(now.toTimeString()); // 11:01:46 GMT+0700 (GMT+07:00)
console.log(birthday.toLocaleDateString()); // m/dd/yyyy: 3/3/2024
console.log(now.toLocaleDateString("vi-VI")); // m/dd/yyyy: 3/3/2024
