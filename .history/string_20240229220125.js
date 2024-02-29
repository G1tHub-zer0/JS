// console.log("Hello");
// console.log("Hello");
// console.log(`Hello`);
//double quotes, single quotes, backticks (template literal)

const name = "Khang";
const job = "student";
// const newString = "My name is " + name + " I am a " + job;
const newString = "My name is ${name} and I am ${job}";
console.log(newString);
//Sử dụng "" hoặc '' sẽ không dùng được ${variable}
//Kết quả hiện ra là My name is ${name} and I am ${job}
const newString1 = `My name is ${name} and I am ${job}`;
//Sử dụng ``(backticks) mới dùng được ${variable}
console.log(newString1);
//Kết quả: My name is Khang and I am student

//index: vị trí của từng kí tự (tính cả khoảng trắng)
const test = "Tao la zer0 0605";
console.log(test.length);
console.log(test.split(" "));
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
console.log(test.slice(0, 11));
console.log(test.slice(-1, -4));
