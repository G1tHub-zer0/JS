console.log(6 + 9);
console.log(typeof 10);
const number1 = "4";
const number2 = "5.9";
console.log(typeof number1); //string
console.log(parseInt(number1)); //4: chuyen ve integer
console.log(parseInt(number2)); //5
console.log(parseFloat(number2)); //5.9: chuyen ve float
const number3 = -10;
console.log(Math.abs(number3)); //10
//Math.floor(value); Lam tron xuong
console.log(Math.floor(4.3)); //4
//Math.ceil(value); Lam trong len
console.log(Math.ceil(4.3)); //5
//Math.round(value); Lam tron gan nhat
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.5)); // 5
//Hien thi so chu so thap phan : (value)toFixed(number)
console.log((1 / 3).toFixed(2)); // 0.3333333333 -> 0.33
//Tuy hien no se chuyen thanh string, neu de tinh toan thi chuyen sang number
console.log(parseFloat((1 / 3).toFixed(2)));
console.log(Math.random()); //random float tu 0 -> 1
console.log(Math.random() * 10); //random float tu 0 -> 10
console.log(Math.ceil(Math.random() * 10)); //random integer tu 0 -> 10
console.log(Math.max(1, 5, 8, 9, 10)); //10
console.log(`Max: ${Math.max(1, 5, 8, 9, 10)}`); //Max: 10
console.log(
  `Min= ${Math.min(30, 100, 12, 9, 10, -10)}`
); //Min= -10
console.log(Math.pow(2, 10)); //1024 : Ham luy thua
//isNaN(value) va Number.isNaN(value)
//NaN : Not a Number
console.log(isNaN("String")); //true
console.log(isNaN("123")); // -> isNaN(123) -> false
//Vi func isNaN su dung Number(value) de chuyen thanh number nen "123" chuyen thanh 123
console.log(Number.isNaN("String")); //false
console.log(Number.isNaN("123")); //false
console.log(Number.isNaN(NaN)); //true
//Value trong Numer.isNaN(value) phai la number thi co the co ket qua true
console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN(34)); //false
console.log(Number.isNaN(34 / 56)); //false
