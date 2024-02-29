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
const newString1 = `My name is ${name} and I am ${job}`;
//Sử dụng ``(backticks) mới dùng được ${variable}
console.log(newString1);
