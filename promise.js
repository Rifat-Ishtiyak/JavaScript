
const p=new Promise((resolve, reject)=>{
    let sum=687;

    if (sum==10) {
        resolve('true');
    } else {
        reject('false');
    }
});

p.then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error);
})


// const takeOrder=(customer)=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`take order for ${customer}`);
//     });
// };

// const processOrder=(customer)=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`processing order for ${customer}`);

//         setTimeout(()=>{
//             resolve(`cooking is completed for ${customer}`);
//             resolve(`order is processed for ${customer}`);
//         },3000);
//     });
// };

// const copleteOrder=(customer)=>{
//     return new Promise((resolve, reject)=>{
//         resolve(`---order completed for ${customer}`);
//     });
// };

// takeOrder('rifat')
//     .then((task)=>console.log(task))
//     .then(processOrder)
//     .then((task)=> console.log(task))
//     .then(copleteOrder)
//     .then((task)=> console.log(task));