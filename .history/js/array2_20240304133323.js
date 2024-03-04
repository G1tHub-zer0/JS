// tao ra mang copy cua mang ban dau
const animals = [
  "tiger",
  "lion",
  "horse",
  "fish",
  "cat",
  "dog",
  "snake",
];
// slice(): tao ra mang moi giong het mang ban dau
const animals2 = animals.slice();
console.log(animals2);
// slice(start): sao chep bat dau tu vi tri start
const animals3 = animals.slice(2);
console.log(animals3);
// slice(start, end): sao chep bat dau tu vi tri start den vi tri end - 1
const animals4 = animals.slice(3, 5);
console.log(animals4);

// splice(): xoa phan tu trong mang hoac thay the no, co anh huong den mang goc
const pet = ["dog", "cat", "bird", "dragon"];
// spice(start): giong slice
const pet2 = pet.splice();
// const pet2 = pet.splice(0);
// const pet2 = pet.splice(2);
// splice(start, deleteCount, item1, item2, item3): deleteCount la so luong phan tu muon xoa hoac thay the, item: phan tu muon them vao
const pet3 = pet.splice(0, 1);

// sort(): sap xep phan tu trong mang theo chuan unicode-16
const random = [1, 1000, "khang", 9999, 10, 5, 9];
console.log(random.sort()); //

const random2 = random.sort(function (a, b) {
  if (a < b) return -1; // khong doi vi tri
  if (a > b) return 1; // doi vi tri cho nhau
});
console.log(random2);
