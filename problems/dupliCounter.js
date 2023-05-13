const arr= ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"];
let unique=[];
let duplicateCounter = 0;

for(let i=0; i<arr.length; i++){
    let index = unique.indexOf(arr[i]);
    if(index === -1){
        unique.push(arr[i]);
    }
    else{
        duplicateCounter+=1;
    }
}

console.log(duplicateCounter)