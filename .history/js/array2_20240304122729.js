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
// slice(start, end): sao chep bat dau tu vi tri start den vi tri end
const animals4 = animals.slice(3, 5);
console.log(animals4);
