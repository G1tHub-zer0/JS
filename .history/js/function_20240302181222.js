function sum(a, b) {
  return a + b;
}
console.log(sum(5, 6));
console.log(sum(-1, 2));
// Không có return thì kết quả về là undefined
// console.log(sum(5)); //NaN vi 5 + undefined = NaN
// Ta có thể truyền giá trị mặc định vào để không gặp vấn đề này khi không điền tham số
// function sum(parameter = defaultValue) {}
// function sum(a = 0, b = 0) {}
