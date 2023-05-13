
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