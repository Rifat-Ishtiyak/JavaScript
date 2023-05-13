//!--------handle unlimited parameters---------
const summation = (...rest) => {
  let sum = 0;
  rest.forEach((item) => (sum += item));
  console.log(sum);
};

summation(1, 2, 3, 4, 20);
