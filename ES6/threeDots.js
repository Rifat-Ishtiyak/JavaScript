
const array1=[12,43,45,78];
const array2=[7,3,5,118];
const array3=[123,'DEF','Adler'];

const total=[...array1, ...array2, ...array3];
console.log(total);


const a=500;
const b=100;
const c=300;

const max=Math.max(a,b,c);
console.log(max);


const max2=Math.max(...array1, ...array2);
console.log(max2);


