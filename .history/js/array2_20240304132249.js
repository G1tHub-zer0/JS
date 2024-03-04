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

// splice(): xoa phan tu trong mang hoac thay the no
const pet = ["dog", "cat", "bird", "dragon"];
// spice(start): giong slice
const pet2 = pet.splice();
// const pet2 = pet.splice(0);
// const pet2 = pet.splice(2);
// splice(start, deleteCount): deleteCount la so luong phan tu muon xoa hoac thay the
const pet3 = pet.splice(0, 1);
console.log(pet);
console.log(pet3);
console.log(animals);
