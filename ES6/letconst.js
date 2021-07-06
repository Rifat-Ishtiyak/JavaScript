"use strict"

const name="Robert Downey Jr.";
console.log(name);

// name="Rifat";
// console.log(name);

const number=[12,34,56];
number[0]=90;
number.push(45);
//! number=[23,34,56,76,78,];  //assignment not possible
console.log(number);

const person={
    name: 'Person1',
    email: 'abc@gmail.com',
    phone: '0122435767'
}

person.name='Rifat'
console.log(person.name);
console.log(person);


let userName="user1";
userName="ABC"
console.log(userName);

let sum=0;                    //! var & let difference
for(var i=0;i<5;i++){
    sum=sum+i;
}

console.log("value of sum :" +sum);
console.log("value of i :" +i);
