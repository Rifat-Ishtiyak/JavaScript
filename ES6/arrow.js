
function sum(num1, num2){
    return num1+num2;
}
console.log(sum(12,12));


let total=(num1,num2)=>num1+num2;   //! multiple parameter 
console.log(total(10,12));

let doubleIt=num => num*2;          //! one parameter
console.log(doubleIt(5));

let me=() => "this is me";          //! without parameter
console.log(me());

const calculate=(x,y)=>{
    sum=x+y;
    subs=x-y;
    div=x/y;
    all=[sum,subs,div];
    return all;
}
console.log(calculate(10,5));