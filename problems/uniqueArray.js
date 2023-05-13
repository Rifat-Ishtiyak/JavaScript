const arr = [3, 26, 1, 2, 3, 44, 57, 87, 1];
let unique = [];

for (let i = 0; i < arr.length; i++) {
  let index = unique.indexOf(arr[i]);
  if (index === -1) {
    unique.push(arr[i]);
  }
}

console.log(
  unique.sort(function (num1, num2) {
    return num1 - num2;
  })
);
