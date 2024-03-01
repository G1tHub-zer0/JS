// console.log("Hello");
// console.log("Hello");
// console.log(`Hello`);
//double quotes, single quotes, backticks (template literal)

const name = "Khang";
const job = "student";
// const newString = "My name is " + name + " I am a " + job;
const newString =
  "My name is ${name} and I am ${job}";
console.log(newString);
//Sử dụng "" hoặc '' sẽ không dùng được ${variable}
//Kết quả hiện ra là My name is ${name} and I am ${job}
const newString1 = `My name is ${name} and I am ${job}`;
//Sử dụng ``(backticks) mới dùng được ${variable}
console.log(newString1);
//Kết quả: My name is Khang and I am student

//index: vị trí của từng kí tự (tính cả khoảng trắng)
const test = " Tao la zer0 0605 ";
console.log(test.length);
console.log(test.split(" ")); //Tách chuỗi
console.log(test.split(""));
console.log(test.split("/"));
console.log(test.toLowerCase());
console.log(test.toUpperCase());
console.log(test.startsWith("t"));
console.log(test.startsWith("T"));
console.log(test.endsWith("0"));
console.log(test.includes("tao"));
console.log(test.includes("Khang"));
console.log(test.includes("0"));
console.log(test.indexOf("0"));
console.log(test.lastIndexOf("0"));
console.log(test.replace("Tao", "Toi"));
console.log(test.repeat(3));
console.log(test.slice(0, 11)); //Lấy ra kí tự hoặc chuỗi kí tự ở vị trí nào đó (start, end) Lấy end - 1
console.log(test.slice(-4));
console.log(test.trim()); //remove space left and right
console.log(test.trimStart()); //remove space left
console.log(test.trimEnd()); //remove space right
console.log(test.charAt(3)); //Lấy ra kí tự ở vị trí index
//substr : Lấy ra 1 phần của string (index, length)
console.log(test.substr(1, 6));
//substring : Lấy ra các kí tự của string (start index, end index) Lấy end -1
console.log(test.substring(1, 6));
//substring : Nếu start > end: Sẽ đổi vị trí 2 đối số
//slices : Nếu start > end: Không đổi vị trí 2 dối số và trả về chuỗi rỗng
console.log(test.substring(6, 1));
console.log(test.slice(6, 1));
//Loại bỏ khoảng trống 2 bên và đưa tất cả về in hoa, thay 0605 thành 0410 và repeat 2 lần
console.log(
  test
    .trim()
    .replace("0605", "0410")
    .toUpperCase()
    .repeat(2)
);
//để dẽ phân biệt các kết quả trên màn hình console: Dùng ${variable}
console.log(
  `Result: ${test
    .trim()
    .replace("0605", "0410")
    .toUpperCase()
    .repeat(2)}`
);
