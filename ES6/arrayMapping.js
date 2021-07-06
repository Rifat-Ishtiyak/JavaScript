
let numbers=[2,4,9,5];

// let square=numbers.map(function(item){
//                         return item*item
//                         });

let square=numbers.map(item=>item*item);
console.log(square);

let cube=numbers.map(item => item**3);
console.log(cube);