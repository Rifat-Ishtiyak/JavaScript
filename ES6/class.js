class Student{
    constructor(sID,sName){
        this.id=sID;
        this.name=sName;
        this.school="ABC School";
    }
}

const s1=new Student(01, 'ABC');
const s2=new Student(02, 'DEF');

console.log(s1.name);
console.log(s2.name);
console.log(s1,s2)