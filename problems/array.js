let a = [12,23,34];
let b = [2,3,4,6,5];
let c = [];

for(let i=0; i<a.length; i++){
  c[i]= a[i];
}


for(let i=0; i<b.length; i++){
  c[i+a.length]= b[i];
}

console.log(c)