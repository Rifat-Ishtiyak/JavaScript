var arr = [2, 0, 0, 3, 5, 0, 6, 11];
var arr2 = [];
var arr3 = [];

for (const num of arr) {
  if (num === 0) {
    arr2.push(num);
  } else {
    arr3.push(num);
  }
}

console.log(...arr3, ...arr2);
