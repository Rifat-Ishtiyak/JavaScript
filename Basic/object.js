let student1={
    name:'ABC',
    ID:'001',
    Address: 'city1, Country'
};
let student2={
    name:'DEF',
    ID:'002',
    Address: 'city2, Country'
};

let student3={
    name:'XYZ',
    ID:'003',
    Address: 'city2, Country'
};

console.log(student3.name);


//! using a constructor ----->

function Student(name, ID, Address){
    this.name=name;
    this.ID=ID;
    this.Address=Address;

    this.details=()=>{
        console.log(this.name);
        console.log(this.ID);
        console.log(this.Address);
    }
}

let s1=new Student('XYZ', '003', 'city2, Country');
let s2=new Student('Abc', '002', 'city23, Country');
let s3=new Student('DFE', '001', 'city4, Country');
let s4=new Student('KJHH', '004', 'city5, Country');

console.log(s1.Address);
console.log(s2.ID);
console.log(s3.name);

s3.details();
