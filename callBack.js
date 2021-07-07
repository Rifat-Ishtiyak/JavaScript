
const takeOrder=(customer, callBack)=>{
    console.log(`take order for ${customer}`);
    callBack(customer);
};

const processOrder=(customer, callBack)=>{
    console.log(`processing order for ${customer}`);

    setTimeout(()=>{
        console.log(`cooking completed`);
        console.log(`order processed for ${customer}`);
        callBack(customer);
    },5000);
};

const completeOrder=(customer)=>{
    console.log(`completed order for ${customer}`);
};

takeOrder("customer1", (customer)=>{
    processOrder(customer, (customer)=>{
        completeOrder(customer);
    })
})






function takeOrder(customer){
    console.log(`take order for ${customer}`);
    processOrder(customer);
}

function processOrder(customer){
    console.log(`processing order for ${customer}`);

    setTimeout(()=>{
        console.log(`cooking completed`);
        console.log(`order processed for ${customer}`);
        completeOrder(customer)
    },5000);
}

function completeOrder(customer){
    console.log(`completed order for ${customer}`);
}

takeOrder("customer1");

takeOrder("customer2");
