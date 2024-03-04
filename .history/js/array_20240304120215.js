// 2 cach tao mang
// array literal
// const students1 = [];
// array constructor
const students2 = new Array();
// mang phuc tap [0, null, undefined, 'Khang', [1, false, [12, true, []]]]
// mang don gian [2, 'zero', null]
const students1 = [
  "khang",
  "huy",
  "khoa",
  "thanh",
  "khanh",
];
// index: vi tri cua phan tu trong mang va bat dau bang 0
//length: do dai cua mang, bat dau tu 1
//truy xuat pha tu trong mang
console.log(students1[0]); //khang
console.log(students1[4]); //khanh
console.log(students1[5]); //undifined
//Lay phan tu cuoi cung cua mang: array.length - 1
console.log(students1[students1.length - 1]); //khanh
// students1.length = 0;
// console.log(students1); // []: empty array
// Phuong thuc hay dung cua mang nen biet
// length: tra ve do dai cua mang -> array.length
// reverse(): dao nguoc gia tri trong mang -> array.reverse()
// join(): noi cac phan tu trong mang thanh string -> array.join()
console.log(students1.join()); // khang,huy,khoa,thanh,khanh
console.log(students1.join("")); // khang,huy,khoa,thanh,khanh
