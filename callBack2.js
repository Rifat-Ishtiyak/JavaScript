
// function square(x){
//     console.log(`square of ${x} is ${x**2}`);
// }

// function higherOrderFunction(num, callBack){
//     callBack(num);
// }

// higherOrderFunction(4, square);




function task1(callBack){
    console.log('task 1');
    callBack();
}

function task2(callBack){
    setTimeout(()=>{
        console.log('task 2 loading....');
        callBack();
    },4000);
}

function task3(callBack){
    console.log('task 3');
    callBack();
}

function task4(){
    console.log('task 4');
}

task1(function(){
    task2(function(){
        task3(function(){
            task4();
        });
    });
});
