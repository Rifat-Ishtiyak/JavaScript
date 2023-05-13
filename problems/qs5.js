const products = [
  { name: "abc", price: 233 },
  { name: "def", price: 450 },
  { name: "efg", price: 110 },
];

const searchName = "def";

const result = products.find(product=> product.name === searchName);

console.log(result);
