class Parent{
    constructor(){
        this.father='ABC';
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getName(){
        return this.name+" "+this.father
    }
}

const child1=new Child('Arnold');

console.log(child1);
console.log(child1.father);
console.log(child1.getName());