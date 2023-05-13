function oneArray(number) {
  for (let num of number) {
    if (Array.isArray(num)) {
      number = oneArray(num);
    } else {
      newArray.push(num);
    }
  }
}

function maxNumber(number) {
  for (var i = 0; i < number.length; i++) {
    if (number[i] > maxDigit) {
      maxDigit = number[i];
    }
  }
}

var arr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
var newArray = [];

oneArray(arr);
var maxDigit = newArray[0];
maxNumber(newArray);

console.log(maxDigit);
