function findFactorial(number){
    if (number>=1) {
        return number * findFactorial(number-1);
    }
    else{
        return 1;
    }

}
const result = findFactorial(9);
console.log("The factorial of 9 is : ", result);